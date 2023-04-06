import Cookies from "js-cookie";
import { JobDetailsService } from ".";
import { PROFILE_API } from "../../constants/apiConstants";
import jobDetailsJson from "../../fixtures/jobDetails.json";
import { JobDataTypes } from "../../stores/types";
export class JobDetailsServiceFixture
  implements JobDetailsService
{
  constructor() {}

  getJobDetails = async (url: string): Promise<JobDataTypes> => {
    return new Promise((resolve) => {
      
      resolve(jobDetailsJson);
    });
  };
}
