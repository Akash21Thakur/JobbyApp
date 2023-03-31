import styled from "styled-components";
import { HOME_LARGE_BG, HOME_SMALL_BG } from "../../constants/imageUrl";
// import { Home_Bg_Image_Dark, Home_Bg_Image_Light } from "../../constants/imageUrl";

export const Wrapper= styled.div`
flex:1;
    height: calc(100% - 80px);
    width:100%;
    background-image: url(${HOME_LARGE_BG});
    background-size: cover;

    @media (max-width:576px) {
        background-image: url(${HOME_SMALL_BG});
    }
`

export const HomeHeading = styled.h1`font-size: 60px`
export const HomePageDescription = styled.p`font-size: 32px`
export const MainContainer = styled.div`
padding:60px;
    display: flex;
    flex-direction: column;
    width:60%;

    button{
        width:150px;
        height:50px;
        padding: 6px;
        margin-top: 20px;
    }

    @media (max-width:576px) {
       padding:20px;
       width: 80%;

       h1{
        margin-top: 100px;
        font-size: 30px;
        
       }

       p{
        font-size: 20px;
       }
    }
`