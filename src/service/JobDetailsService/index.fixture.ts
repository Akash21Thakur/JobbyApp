import { JobDetailsService } from ".";

import jobDetailsJson from "../../fixtures/jobDetails.json";
import { JobDataTypes } from "../../stores/types";
export class JobDetailsServiceFixture implements JobDetailsService {
  constructor() {}

  getJobDetails = async (url: string): Promise<JobDataTypes> => {
    return new Promise((resolve) => {
      resolve(jobDetailsJson);
    });
  };
}
