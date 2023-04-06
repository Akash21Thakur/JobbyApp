import Cookies from "js-cookie";
import { UserProfileDetailService } from ".";
import { PROFILE_API } from "../../constants/apiConstants";
import userDetailsJson from "../../fixtures/userProfileDetails.json";
import { ProfileDetailsFetchType } from "../../stores/types";

export class UserProfileDetailServiceFixture
  implements UserProfileDetailService
{
  constructor() {}

  getUserDetails = async (): Promise<ProfileDetailsFetchType> => {
    return new Promise((resolve) => {
      resolve(userDetailsJson);
    });
  };
}
