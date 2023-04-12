import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: #000;
        color: #fff;
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
`;
