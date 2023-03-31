import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        /* height:100%; */
        background-color: #000;
        color: #fff;
        /* overflow:hidden; */
        box-sizing: border-box;

    }
    #root{
        height: 100vh;
        display: flex;
        flex-direction: column;

    }

    .link{
        color: inherit;
  text-decoration: none;
    }
`