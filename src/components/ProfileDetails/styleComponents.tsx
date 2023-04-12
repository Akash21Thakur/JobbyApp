import styled from "styled-components";
import { PROFILE_BG } from "../../constants/imageUrl";

export const ProfileMainDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 245px;
  height: 183px;
  border-radius: 15px;
  padding: 32px 14px;
  box-sizing: border-box;
  background-image: url(${PROFILE_BG});
  background-size: cover;

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const ProfilePic = styled.img`
  width: 45px;
`;

export const UserName = styled.span`
  color: #6366f1;
  padding-top: 6px;
  font-weight: 500;
  font-size: 20px;
`;
export const UserDescription = styled.p`
  color: #2c364c;
  font-size: 12px;
`;
