// import { Failue_View } from "../../constants/imageUrl";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <>
      <MainContainer data-testid='apiFailureTestId'>
        <Wrapper>
          <NoSavedVideosContainer src={FAILURE_LOGO} alt="failed-img"/>
          <NotFound>{t("noJobsFound")}</NotFound>
          <NotFoundDesc>{t("noJobsWithFilters")}</NotFoundDesc>
          <RetryButton handleButtonClick={props.handleRetry} />
        </Wrapper>
      </MainContainer>
    </>
  );
};

export default ApiFailureComponent;
