import { useNavigate } from "react-router-dom";
import withJobHeaderHoc from "../../hocs/withJobHearderHoc";
import { LoginButton } from "../LoginPage/styleComponents";
import { HomeHeading, HomePageDescription, MainContainer, Wrapper } from "./styleComponents";

const HomePage = () => {
    const navigate=useNavigate();
    const handleFindJob = () => {
         navigate('/jobs');
    }
  return (
    <>
      <Wrapper>
        <MainContainer>

        <HomeHeading >
            Find The Job That Fits Your Life
        </HomeHeading>
        <HomePageDescription>
            Millions of people are searching for jobs, salary
            information, company reviews. Find the job that fits your abilities and potential.
        </HomePageDescription>
        <LoginButton onClick={handleFindJob}>Find Jobs</LoginButton>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default withJobHeaderHoc(HomePage);
