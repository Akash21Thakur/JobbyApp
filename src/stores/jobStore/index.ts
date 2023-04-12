import Cookies from "js-cookie";
import qs from "query-string";

import { action, makeObservable, observable } from "mobx";
import { JobDataModel, JobsModel } from "../model/JobsModel";
import ProfileDetailsModel from "../model/ProfileDetailsModel";
import { ApiStatus, JobsTypes, ProfileDetailsType } from "../types";
import { JobDetailsServiceApi } from "../../service/JobDetailsService/index.api";
import { JobsListApi } from "../../service/JobsListService/index.api";
import { UserProfileDetailServiceApi } from "../../service/UserProfileService/index.api";
import { employmentItemList } from "../../constants/valuesConstants";

class JobStore {
  jobsList: JobsModel[] = [];
  profileDetails!: ProfileDetailsModel;
  jobData!: JobDataModel;

  apiStatusJobList!: ApiStatus;
  apiStatusProfileDetails!: ApiStatus;
  apiStatusJobDetails!: ApiStatus;

  searchedText: string = "";
  salary: string | null = null;
  employType: string[] = [];
  selectedEmployment = new Set<string>();

  constructor() {
    makeObservable(this, {
      apiStatusJobList: observable,
      apiStatusProfileDetails: observable,
      apiStatusJobDetails: observable,
      searchedText: observable,
      salary: observable,
      selectedEmployment: observable,
      jobData: observable,

      updateEmploymentList: action,
      updateSearchedText: action,
      updateSalary: action,
      fetchProfileDetails: action,
      fetchJobsList: action,
      fetchJobDetails: action,
    });
  }

  displayArray = () => {
    return employmentItemList.filter((item) =>
      this.selectedEmployment.has(item)
    );
  };

  updateEmploymentList = (item: string, checked: boolean) => {
    if (checked) {
      this.selectedEmployment.add(item);
    } else {
      this.selectedEmployment.delete(item);
      this.selectedEmployment = new Set(this.selectedEmployment);
    }
  };

  updateSearchedText = (val: string) => {
    this.searchedText = val;
  };

  updateSalary = (val: string) => {
    this.salary = val;
  };

  apiUrlGenerator = () => {
    const val = this.displayArray();

    const queryParams = qs.stringify({
      minimum_package: this.salary,
      employment_type: val.join(","),
      search: this.searchedText,
    });

    const jobApiUrl = `https://apis.ccbp.in/jobs?${queryParams}`;

    return jobApiUrl;
  };

  fetchProfileDetails = async () => {
    if (this.apiStatusProfileDetails === ApiStatus.SUCCESS) return;

    this.apiStatusProfileDetails = ApiStatus.LOADING;

    try {
      const serviceObj = new UserProfileDetailServiceApi();
      const response = await serviceObj.getUserDetails();

      this.profileDetails = new ProfileDetailsModel(
        response.profile_details as ProfileDetailsType
      );
      this.apiStatusProfileDetails = ApiStatus.SUCCESS;
    } catch (err) {
      this.apiStatusProfileDetails = ApiStatus.FAILURE;
    }
  };

  fetchJobsList = async () => {
    this.apiStatusJobList = ApiStatus.LOADING;

    try {
      const obj = new JobsListApi();
      const response = await obj.getJobsList(this.apiUrlGenerator());
      console.log(response.jobs.length);
      this.jobsList = response.jobs.map(
        (each: JobsTypes) => new JobsModel(each)
      );

      this.apiStatusJobList = ApiStatus.SUCCESS;
    } catch (err) {
      console.log(err);
      this.apiStatusJobList = ApiStatus.FAILURE;
    }
  };

  fetchJobDetails = async (id: string | undefined) => {
    if (this.apiStatusJobDetails === ApiStatus.SUCCESS) return;
    this.apiStatusJobDetails = ApiStatus.LOADING;
    const token = Cookies.get("jwt_token");

    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };
    try {
      const obj = new JobDetailsServiceApi();
      const response = await obj.getJobDetails(
        `https://apis.ccbp.in/jobs/${id}`
      );

      this.jobData = new JobDataModel(response);

      this.apiStatusJobDetails = ApiStatus.SUCCESS;
    } catch (err) {
      console.log(err);
      this.apiStatusJobDetails = ApiStatus.FAILURE;
    }
  };
}

export default JobStore;
