import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  margin-bottom: 30px;

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SubHead = styled.h1`
  font-size: 20px;
`;
export const SkillLogo = styled.img`
  width: 40px;
`;
export const SkillName = styled.span`
  margin-left: 15px;
`;
export const EachSkillDiv = styled.div`
  display: flex;
  align-items: center;
`;
