import Cookies from "js-cookie";
import qs from "query-string";

import { action, makeObservable, observable } from "mobx";
import { JobDataModel, JobsModel } from "../model/JobsModel";
import ProfileDetailsModel from "../model/ProfileDetailsModel";
import {
  ApiStatus,
  employmentItemList,
  JobsTypes,
  ProfileDetailsType,
} from "../types";
import { JobDetailsServiceApi } from "../../service/JobDetailsService/index.api";
import { JobsListApi } from "../../service/JobsListService/index.api";
import { UserProfileDetailServiceApi } from "../../service/UserProfileService/index.api";

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
    // console.log(val);
    const queryParams = qs.stringify({
      employment_type: val.join(","),
      minimum_package: this.salary,
      search: this.searchedText,
    });
    //  console.log(this.displayArray().join(','))
    //  console.log(queryParams);
    //  console.log("akash")
    const jobApiUrl = `https://apis.ccbp.in/jobs?${queryParams}`;
    // console.log(jobApiUrl);
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
      // console.error(err);
      // console.log("Error found");
      this.apiStatusProfileDetails = ApiStatus.FAILURE;
    }
  };

  fetchJobsList = async () => {
    // if (this.apiStatusProfileDetails === ApiStatus.SUCCESS) return;
    this.apiStatusJobList = ApiStatus.LOADING;
    // this.apiStatusProfileDetails = ApiStatus.LOADING;

    try {
      const obj = new JobsListApi();
      // const obj = new JobsListFixture();
      const response = await obj.getJobsList(this.apiUrlGenerator());
      console.log(response.jobs.length);
      this.jobsList = response.jobs.map(
        (each: JobsTypes) => new JobsModel(each)
      );
      // console.log(this.jobsList)

      this.apiStatusJobList = ApiStatus.SUCCESS;
    } catch (err) {
      console.log(err);
      this.apiStatusJobList = ApiStatus.FAILURE;
      // this.apiStatusProfileDetails = ApiStatus.FAILURE;
    }
  };

  fetchJobDetails = async (id: string | undefined) => {
    if (this.apiStatusJobDetails === ApiStatus.SUCCESS) return;
    this.apiStatusJobDetails = ApiStatus.LOADING;
    // this.apiStatusProfileDetails = ApiStatus.LOADING;
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
