import styled from "styled-components";

export const SearchWithIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  box-sizing: border-box;
  width: 350px;

  border: 1px solid #d3cbcb;
  .search-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    cursor: pointer;

    background-color: #8a8a9231;
  }

  @media (max-width: 576px) {
    width: 100%;
    div {
      width: 100%;
    }
  }
`;

export const SearchVideos = styled.input`
  width: 250px;
  outline: none;
  background-color: #000;
  border: 0.5px solid white;
  color: #ffffff;
  padding: 6px 16px;
  font-size: 16px;
  border: none;
  /* border-radius: 0px; */
`;

export const SearchIconDiv = styled.div`
  font-size: 14px;
  border-left: 1px solid #fff;
`;

export const SearchIcon = styled.i``;
