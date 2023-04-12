import Cookies from "js-cookie";
import { JobsListService } from ".";
import { JobsFetchType } from "../../stores/types";

export class JobsListApi implements JobsListService {
  constructor() {}

  getJobsList = async (url: string): Promise<JobsFetchType> => {
    const token = Cookies.get("jwt_token");
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };
    const response = await fetch(url,option);
    
    return response.json();
  };
}
