// import { Wrapper } from "../../routes/LoginPage/styleComponents";

import Cookies from "js-cookie";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { WEBSITE_LOGO } from "../../constants/imageUrl";
// import { Website_Logo } from "../../constants/imageUrl";
import { LoginButton, SiteLogo } from "../../routes/LoginPage/styleComponents";
import NavigationPages from "../NavigationPages";

import { NavIcon, Wrapper } from "./styleComponent";

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove('jwt_token');
        navigate('/login');
    }

    return (
    <Wrapper>
     <NavLink to='/' >

     <SiteLogo src={WEBSITE_LOGO} />
     </NavLink>
     <NavigationPages />
     <NavIcon className="fa-solid fa-arrow-right-from-bracket" onClick={handleLogout}/>
     <LoginButton onClick={handleLogout}>Logout</LoginButton>
   
    </Wrapper>)
}

export default Header;