// import { No_Jobs } from "../../constants/imageUrl";
import { NO_JOBS } from "../../constants/imageUrl";
import { MainContainer, NoSavedVideosContainer, NotFound, NotFoundDesc, Wrapper } from "../../routes/PageNotFoundPage/styleComponents";

const NoJobsContainer = ()=> {
    return <>
    <MainContainer>

    <Wrapper>

<NoSavedVideosContainer src={NO_JOBS} />
<NotFound>No Jobs Found</NotFound>
<NotFoundDesc>We could not find any jobs. Try other filters</NotFoundDesc>
</Wrapper>
    </MainContainer></>
}

export default NoJobsContainer;