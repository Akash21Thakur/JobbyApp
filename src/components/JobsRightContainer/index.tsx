import JobsListContainer from "../JobsListContainer";
import SearchBar from "../SearchBar";
import { Wrapper } from "./styledComponents";

const JobsRightContainer = () => {
  return (
    <>
      <Wrapper data-testid="jobRightContainerTestId">
        <SearchBar />
        <JobsListContainer />
      </Wrapper>
    </>
  );
};

export default JobsRightContainer;
