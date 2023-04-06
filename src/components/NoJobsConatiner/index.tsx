// import { No_Jobs } from "../../constants/imageUrl";
import { useTranslation } from "react-i18next";
import { NO_JOBS } from "../../constants/imageUrl";
import {
  MainContainer,
  NoSavedVideosContainer,
  NotFound,
  NotFoundDesc,
  Wrapper,
} from "../../routes/PageNotFoundPage/styleComponents";

const NoJobsContainer = () => {
    const {t} = useTranslation();

  return (
    <>
      <MainContainer data-testid='no-jobs-container'>
        <Wrapper>
          <NoSavedVideosContainer src={NO_JOBS} alt='noJobImg'/>
          <NotFound>{t('noJobsFound')}</NotFound>
          <NotFoundDesc>
          {t('noJobsWithFilters')}
          </NotFoundDesc>
        </Wrapper>
      </MainContainer>
    </>
  );
};

export default NoJobsContainer;
