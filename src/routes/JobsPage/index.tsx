import JobsListContainer from "../../components/JobsRightContainer";
import JobsProfileFilterContainer from "../../components/JobsLeftContainer";
import withJobHeaderHoc from "../../hocs/withJobHearderHoc";
import { Wrapper } from "./styleComponent";
import JobsLeftContainer from "../../components/JobsLeftContainer";
import JobsRightContainer from "../../components/JobsRightContainer";
// import { Wrapper } from "../LoginPage/styleComponents";

const JobsPage = () => {
    return( <>
    <Wrapper data-testid='jobPageTestId'>
         <JobsLeftContainer />
         <JobsRightContainer />
    </Wrapper>
    </>)
}

export default JobsPage;