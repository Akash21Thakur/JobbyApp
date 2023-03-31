// import { Failue_View } from "../../constants/imageUrl";
import { FAILURE_LOGO } from "../../constants/imageUrl";
import {
  MainContainer,
  NoSavedVideosContainer,
  NotFound,
  NotFoundDesc,
  Wrapper,
} from "../../routes/PageNotFoundPage/styleComponents";
import RetryButton from "../Buttons/RetryButton";

interface Props {
  handleRetry: () => void;
}

const ApiFailureComponent = (props: Props) => {
  return (
    <>
      <MainContainer>
        <Wrapper>
          <NoSavedVideosContainer src={FAILURE_LOGO} />
          <NotFound>No Jobs Found</NotFound>
          <NotFoundDesc>
            We could not find any jobs. Try other filters
          </NotFoundDesc>
          <RetryButton handleButtonClick={props.handleRetry} />
        </Wrapper>
      </MainContainer>
    </>
  );
};

export default ApiFailureComponent;
