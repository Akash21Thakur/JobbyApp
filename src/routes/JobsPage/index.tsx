import { Wrapper } from "./styleComponent";
import JobsLeftContainer from "../../components/JobsLeftContainer";
import JobsRightContainer from "../../components/JobsRightContainer";

const JobsPage = () => {
  return (
    <>
      <Wrapper data-testid="jobPageTestId">
        <JobsLeftContainer />
        <JobsRightContainer />
      </Wrapper>
    </>
  );
};

export default JobsPage;
