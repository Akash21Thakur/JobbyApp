// import { Not_Found } from "../../constants/imageUrl";
import { NOT_FOUND } from "../../constants/imageUrl";
import { MainContainer, NoSavedVideosContainer, NotFound, NotFoundDesc, Wrapper } from "./styleComponents";

const JobsPage = () => {
    return <><MainContainer>

    <Wrapper>

<NoSavedVideosContainer src={NOT_FOUND} />
<NotFound>Page Not found</NotFound>
<NotFoundDesc>We are sorry, the page you requested could not be found.</NotFoundDesc>
</Wrapper>
    </MainContainer>
    </>
}

export default JobsPage;