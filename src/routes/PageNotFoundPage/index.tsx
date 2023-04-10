// import { Not_Found } from "../../constants/imageUrl";
import { NOT_FOUND } from "../../constants/imageUrl";
import {
  MainContainer,
  NoSavedVideosContainer,
  NotFound,
  NotFoundDesc,
  Wrapper,
} from "./styleComponents";

const PageNotFoundPage = () => {
  return (
    <>
      <MainContainer data-testid='pageNotFoundPageTestId'>
        <Wrapper>
          <NoSavedVideosContainer src={NOT_FOUND} />
          <NotFound data-testid='pageNotFound'>Page Not found</NotFound>
          <NotFoundDesc>
            We are sorry, the page you requested could not be found.
          </NotFoundDesc>
        </Wrapper>
      </MainContainer>
    </>
  );
};

export default PageNotFoundPage;
