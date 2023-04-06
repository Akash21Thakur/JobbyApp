import { JobDataTypes, ProfileDetailsType } from "../../stores/types";

export interface JobDetailsService {
    getJobDetails(url: string): Promise<JobDataTypes>;
}