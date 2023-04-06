import { ProfileDetailsFetchType } from "../../stores/types";

export interface UserProfileDetailService {
    getUserDetails(): Promise<ProfileDetailsFetchType>;
}