import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { WEBSITE_LOGO } from "../../constants/imageUrl";
import { LoginButton, SiteLogo } from "../../routes/LoginPage/styleComponents";
import NavigationPages from "../NavigationPages";

import { NavIcon, Wrapper } from "./styleComponent";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const showHeader = location.pathname !== "/login";

  if (!showHeader) {
    return null;
  }
  const handleLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <Wrapper data-testid='headerId'>
      <Link to="/">
        <SiteLogo src={WEBSITE_LOGO} alt="jobby-app-logo"/>
      </Link>
      <NavigationPages />

      <NavIcon
        className="fa-solid fa-arrow-right-from-bracket"
        onClick={handleLogout}
      />
      <LoginButton onClick={handleLogout} data-testid='logoutId'>{t("logout")}</LoginButton>
    </Wrapper>
  );
};

export default Header;
