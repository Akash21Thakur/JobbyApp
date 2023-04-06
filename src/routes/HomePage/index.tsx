import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import withJobHeaderHoc from "../../hocs/withJobHearderHoc";
import { LoginButton } from "../LoginPage/styleComponents";
import {
  HomeHeading,
  HomePageDescription,
  MainContainer,
  Wrapper,
} from "./styleComponents";

const HomePage = () => {
  const {t} =useTranslation();
  const navigate = useNavigate();
  const handleFindJob = () => {
    navigate("/jobs");
  };
  return (
    <>
      <Wrapper>
        <MainContainer>
          <HomeHeading>{t('findJob')}</HomeHeading>
          <HomePageDescription>
          {t('searchingForJobs')}
          </HomePageDescription>
          <LoginButton onClick={handleFindJob}>{t('findJobText')}</LoginButton>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default withJobHeaderHoc(HomePage);
