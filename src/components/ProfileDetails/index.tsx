import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import { Loading } from "react-loading-dot/lib";
import JobStore from "../../stores/jobStore";
import ProfileDetailsModel from "../../stores/model/ProfileDetailsModel";
import { ApiStatus } from "../../stores/types";
import RetryButton from "../Buttons/RetryButton";
import Loader from "../Loader";
import {
  ProfileMainDiv,
  ProfilePic,
  UserDescription,
  UserName,
} from "./styleComponents";

interface Props {}
interface InjectedProps extends Props {
  jobsStore: JobStore;
}
const ProfileDetails = inject("jobsStore")(
  observer((props: Props) => {
    const { jobsStore } = props as InjectedProps;

    const fetchApi = () => {
      jobsStore.fetchProfileDetails();
    };
    useEffect(() => {
      fetchApi();
    }, []);

    const renderProfileDetails = () => {
      const details: ProfileDetailsModel = jobsStore.profileDetails;
      return (
        <>
          <ProfileMainDiv data-testid="profileDetailTestId">
            <ProfilePic
              data-testid="userNameProfile"
              src={details.profileImageUrl}
              alt={details.name}
            />
            <UserName>{details.name}</UserName>
            <UserDescription>{details.shortBio}</UserDescription>
          </ProfileMainDiv>
        </>
      );
    };

    const renderComponents = () => {
      const apiStatus = jobsStore.apiStatusProfileDetails;
      switch (apiStatus) {
        case ApiStatus.LOADING:
          return <Loader />;

        case ApiStatus.SUCCESS:
          return renderProfileDetails();

        case ApiStatus.FAILURE:
          return <RetryButton handleButtonClick={fetchApi} />;

        default:
          return <Loader />;
      }
    };

    return <>{renderComponents()}</>;
  })
);

export default ProfileDetails;
