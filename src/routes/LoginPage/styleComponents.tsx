
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a0a0a;
  height: 100vh;
  color: #fff;

  .checkbox {
    width: auto;
    padding: 4px;
    cursor: pointer;
  }
`;

export const BreakLine = styled.br``;
export const LoginButton = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: #6366f1;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const ShowPasswordDiv = styled.div``;

export const UserInput = styled.input`
  width: 100%;
  font-size: 30px;
  margin-top: 8px;
  margin-bottom: 40px;
`;

export const LoginForm = styled.form`
  width: 100%;
`;

export const SiteLogo = styled.img`
  width: 200px;
  height: 50px;
  margin-bottom: 30px;
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8a8a9231;
  padding: 40px;
  width: 350px;
  height: 400px;
  border-radius: 16px;
  box-shadow: rgb(136 136 136) 0px 0px 42px -12px;
`;

export const InputLabel = styled.label``;

export const ErrorMessage = styled.p`
  color: red;
`;
