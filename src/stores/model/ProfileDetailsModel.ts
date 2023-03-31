import { ProfileDetailsType } from "../types";

 class ProfileDetailsModel{
    name: string;
    profileImageUrl: string;
    shortBio: string;

    constructor(data: ProfileDetailsType){
        this.name=data.name;
        this.profileImageUrl=data.profile_image_url;
        this.shortBio=data.short_bio;
    }
}

export default ProfileDetailsModel

