import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100% - 130px);
  display: flex;
  padding: 25px;
  margin-top: 70px;

  @media (max-width: 760px) {
    flex-wrap: wrap;
    /* justify-content: center; */
  }
  /* height: 100%; */
`;
