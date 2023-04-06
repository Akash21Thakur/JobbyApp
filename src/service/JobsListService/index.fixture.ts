import { JobsListService } from ".";
import jobListJson from "../../fixtures/jobsList.json";
import { JobsFetchType } from "../../stores/types";

export class JobsListFixture implements JobsListService {
  constructor() {}

  getJobsList = async (url: string)
  : Promise<JobsFetchType> => {
    // const data : JobsFetchType = jobListJson;
    return new Promise((resolve) => {
      resolve(jobListJson);
    });
  };
}
