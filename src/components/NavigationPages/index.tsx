import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { NavIcon } from "../Header/styleComponent";
import { TextSpan, Wrapper } from "./styleComponents";
// import { Wrapper } from "../Header/styleComponent";

const NavigationPages = () => {
  const {t} =useTranslation();
  return (
    <>
      <Wrapper data-testid='navigationPageId'>
        <NavLink to="/" className="navlink" data-testid='homeNavigationId'>
          <NavIcon className="fa-solid fa-house" />
          <TextSpan>{t('home')}</TextSpan>
        </NavLink>
        <NavLink to="/jobs" className="navlink" data-testid='jobsNavigationId'>
          <NavIcon className="fa-solid fa-briefcase" />
          <TextSpan>{t('jobType')}</TextSpan>
        </NavLink>
      </Wrapper> 
    </>
  );
};

export default NavigationPages;
