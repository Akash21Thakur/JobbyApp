import { NavLink } from "react-router-dom";
import { NavIcon } from "../Header/styleComponent";
import {TextSpan, Wrapper } from "./styleComponents";
// import { Wrapper } from "../Header/styleComponent";

const NavigationPages = () => {
    return (
        <>
        <Wrapper>
            <NavLink to='/' className='navlink' >
                <NavIcon className="fa-solid fa-house"/>
                <TextSpan>Home</TextSpan>
            </NavLink>
            <NavLink to='/jobs' className='navlink' >
            <NavIcon className="fa-solid fa-briefcase"/>
                <TextSpan>Job</TextSpan>
            </NavLink>
            </Wrapper></>
    )
}

export default NavigationPages;