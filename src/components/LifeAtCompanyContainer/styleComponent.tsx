import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 760px) {
    flex-wrap: wrap;
  }
`;

export const LifeDescription = styled.p`
  font-size: 20px;
  margin-right: 40px;
`;
export const OfficeImage = styled.img`
  @media (max-width: 760px) {
    width: 100%;
  }
`;
