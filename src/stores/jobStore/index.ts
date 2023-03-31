import Cookies from "js-cookie";
import qs from 'query-string';


import { action, makeObservable, observable } from "mobx";
// import { Jobs_Api, Profile_Api } from "../../constants/apiConstants";
import {JobDataModel, JobDetailModel, JobsModel} from "../model/JobsModel";
import ProfileDetailsModel from "../model/ProfileDetailsModel";
import { ApiStatus, employmentItemList, JobsTypes, ProfileDetailsType } from "../types";
import { fetchData } from "../../service/apiService.api";
import { PROFILE_API } from "../../constants/apiConstants";

class JobStore {
  jobsList!: JobsModel[];
  profileDetails!: ProfileDetailsModel;
  jobData!: JobDataModel;

  apiStatusJobList!: ApiStatus;
  apiStatusProfileDetails!: ApiStatus ;
  apiStatusJobDetails!: ApiStatus ;

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
      fetchJobDetails: action
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
   
    if (this.salary===val) this.salary = null;
    else this.salary = val;
  };

  apiUrlGenerator = () => {
    const val = this.displayArray();
    console.log(val);
     const  queryParams = qs.stringify({ employment_type: val.join(','), minimum_package: this.salary, search: this.searchedText });   
    //  console.log(this.displayArray().join(','))
    //  console.log(queryParams);
    //  console.log("akash")
     const jobApiUrl = `https://apis.ccbp.in/jobs?${queryParams}`
     console.log(jobApiUrl)
    return jobApiUrl;
  }

  fetchProfileDetails = async () => {
    if (this.apiStatusProfileDetails === ApiStatus.SUCCESS) return;

    this.apiStatusProfileDetails = ApiStatus.LOADING;
    const token = Cookies.get("jwt_token");

    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };
    try {
      const response = await fetchData(PROFILE_API, option);
      const data = await response.json();
      if (response.ok) {
        this.profileDetails = new ProfileDetailsModel(
          data.profile_details as ProfileDetailsType
        );
        // console.log(this.profileDetails);
        this.apiStatusProfileDetails = ApiStatus.SUCCESS;
      } else {
        this.apiStatusProfileDetails = ApiStatus.FAILURE;
        console.log(data.error_msg);
      }
    } catch (err) {
      this.apiStatusProfileDetails = ApiStatus.FAILURE;
    }
  };

  fetchJobsList = async () => {
    // if (this.apiStatusProfileDetails === ApiStatus.SUCCESS) return;
     this.apiStatusJobList = ApiStatus.LOADING;
    // this.apiStatusProfileDetails = ApiStatus.LOADING;
    const token = Cookies.get("jwt_token");

    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };
    try {
      const response = await fetchData(this.apiUrlGenerator(), option);
      const data = await response.json();
      if (response.ok) {
        console.log(data.jobs);
        this.jobsList = data.jobs.map((each: JobsTypes ) => (new JobsModel(each)))
        
        // console.log(this.jobsList);
        this.apiStatusJobList=ApiStatus.SUCCESS;
        // this.apiStatusProfileDetails = ApiStatus.SUCCESS;
      } else {
        this.apiStatusJobList=ApiStatus.FAILURE
        // this.apiStatusProfileDetails = ApiStatus.FAILURE;
        console.log(data.error_msg);
      }
    } catch (err) {
      console.log(err);
      this.apiStatusJobList=ApiStatus.FAILURE
      // this.apiStatusProfileDetails = ApiStatus.FAILURE;
    }
  }


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
      const response = await fetchData(`https://apis.ccbp.in/jobs/${id}`, option);
      const data = await response.json();
      if (response.ok) {
        // console.log(data);
        this.jobData = new JobDataModel(data);
        // console.log(this.jobData)
        
        // console.log(this.jobsList);
        this.apiStatusJobDetails=ApiStatus.SUCCESS;
        // this.apiStatusProfileDetails = ApiStatus.SUCCESS;
      } else {
        this.apiStatusJobDetails=ApiStatus.FAILURE
        // this.apiStatusProfileDetails = ApiStatus.FAILURE;
        console.log(data.error_msg);
      }
    } catch (err) {
      console.log(err);
      this.apiStatusJobDetails=ApiStatus.FAILURE
      // this.apiStatusProfileDetails = ApiStatus.FAILURE;
    }
  }
}

export default JobStore;
