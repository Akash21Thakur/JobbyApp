import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import { Loading } from "react-loading-dot/lib";
import JobStore from "../../stores/jobStore";
import ProfileDetailsModel from "../../stores/model/ProfileDetailsModel";
import { ApiStatus } from "../../stores/types";
import RetryButton from "../Buttons/RetryButton";
import Loader from "../Loader";
import { ProfileMainDiv, ProfilePic, UserDescription, UserName } from "./styleComponents";


interface Props {}
interface InjectedProps extends Props {
  jobsStore: JobStore;
}
const ProfileDetails = inject("jobsStore")(

    observer((props: Props) => {
      const {jobsStore} = props as InjectedProps;
   

      const fetchApi= () => {
        jobsStore.fetchProfileDetails();
      }
    useEffect(()=>{
       fetchApi()
    },[])

    const renderProfileDetails = () => {
       
        // console.log(jobsStore.profileDetails);
          const details: ProfileDetailsModel=jobsStore.profileDetails;
        return <>
         <ProfileMainDiv>
         
          <ProfilePic src={details.profileImageUrl} alt={details.name} />
          <UserName>{details.name}</UserName>
          <UserDescription>{details.shortBio}</UserDescription>
             {/* <ProfileDetailsDiv></ProfileDetailsDiv> */}
         </ProfileMainDiv>
        </>
    }

    const renderComponents = () => {
        const apiStatus = jobsStore.apiStatusProfileDetails;
        // console.log(apiStatus)
        switch (apiStatus) {
          case ApiStatus.LOADING:
            return <Loader />
  
          case ApiStatus.SUCCESS:
            // {console.log("Successs")}
            return renderProfileDetails()
  
          case ApiStatus.FAILURE:
            // return <div>Akash</div>
           return <RetryButton handleButtonClick={fetchApi}/>
            // break;
  
          default:
            return <Loader />
        }
      };

    return <>{renderComponents()}</>
  })
);

export default ProfileDetails;
