import Cookies from "js-cookie";
import { JobDetailsService } from ".";
import { JobDataTypes } from "../../stores/types";

export class JobDetailsServiceApi implements JobDetailsService {
  constructor() {}

  getJobDetails = async (url: string): Promise<JobDataTypes> => {
    const token = Cookies.get("jwt_token");
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };
    const response = await fetch(url, option);

    return response.json();
  };
}
