import { JobsFetchType } from "../../stores/types";

export interface JobsListService {
    getJobsList(url: string): Promise<JobsFetchType>;
}