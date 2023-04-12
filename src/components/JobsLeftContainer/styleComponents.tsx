import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const HorizontalLine = styled.div`
  background-color: #64748b;
  width: 100%;
  height: 2px;
  margin-top: 24px;
`;
