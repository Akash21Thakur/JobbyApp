import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  /* position: fixed; */
  
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-left: 40px;
  /* width: 100%; */
  /* background-color: #8a8a9231; */
height:40px;
  img {
    margin: 0px;
    width: 130px;
    height: 38px;
    cursor: pointer;
  }

  button {
    width: 200px;
margin-right:50px;
    @media (max-width: 576px) {
      display: none;
    }
  }
`

export const NavIcon = styled.i`
    display: none;
    font-size:20px;
    cursor: pointer;

    @media (max-width: 576px) {
      margin-right: 76px;
      display: block;
    }
  `

  
