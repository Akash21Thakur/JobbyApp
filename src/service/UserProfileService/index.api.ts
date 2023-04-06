import Cookies from "js-cookie";
import { UserProfileDetailService } from ".";
import { PROFILE_API } from "../../constants/apiConstants";
import { ProfileDetailsFetchType } from "../../stores/types";

export class UserProfileDetailServiceApi implements UserProfileDetailService {
  constructor() {}

  // getDetails = async () : Promise<Respons
  // ProfileDetailsFetchType
  getUserDetails = async (): Promise<ProfileDetailsFetchType> => {
    const token = Cookies.get("jwt_token");
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };

    
    const response = await fetch(PROFILE_API, option);
    console.log(response.ok);
    return response.json();
  };
}
