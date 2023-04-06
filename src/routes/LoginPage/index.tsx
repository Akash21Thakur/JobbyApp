import { useEffect, useState } from "react";

import {
  BreakLine,
  ErrorMessage,
  InputLabel,
  LoginButton,
  LoginCard,
  LoginForm,
  ShowPasswordDiv,
  SiteLogo,
  UserInput,
  Wrapper,
} from "./styleComponents";
import { useNavigate } from "react-router";

import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { LOGIN_API } from "../../constants/apiConstants";
import { WEBSITE_LOGO } from "../../constants/imageUrl";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();
  const [userDetails, setDetails] = useState({
    username: "",
    password: "",
  });

  const [loginFailure, setLoginFailure] = useState({
    errorStatus: false,
    error_msg: "",
  });

  const [show, showPassword] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // console.log(props);

    const option = {
      method: "POST",

      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(LOGIN_API, option);
      const data = await response.json();

      // console.log(response);

      if (response.ok === true) {
        Cookies.set("jwt_token", data.jwt_token, { expires: 30 });

        navigate(-1);
      } else {
        setLoginFailure({
          errorStatus: true,
          error_msg: data.error_msg,
        });
        console.log(data);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleTogglePassword = () => {
    showPassword(!show);
  };

  const handlePassword = (event: any) => {
    setDetails((currState) => ({
      ...currState,
      password: event.target.value,
    }));
  };

  const handleUsername = (event: any) => {
    setDetails((currState) => ({
      ...currState,
      username: event.target.value,
    }));
  };

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      navigate(-1);
    }
  });

  return (
    <>
      <Wrapper>
        <LoginCard>
          <SiteLogo src={WEBSITE_LOGO} />
          <LoginForm onSubmit={handleSubmit}>
            <InputLabel id="username">{t("username")}</InputLabel>

            <UserInput
              aria-labelledby="username"
              value={userDetails.username}
              type="text"
              onChange={handleUsername}
            />
            <BreakLine />
            <InputLabel id="password">{t("password")}</InputLabel>
            <BreakLine />
            <UserInput
              aria-labelledby="password"
              value={userDetails.password}
              type={show ? "text" : "password"}
              onChange={handlePassword}
            />

            <ShowPasswordDiv>
              <UserInput
                aria-labelledby="showPassword"
                className="checkbox"
                type="checkbox"
                onChange={handleTogglePassword}
              />
              <InputLabel id="showPassword" htmlFor="show-password">
                {t("showPassword")}
              </InputLabel>
            </ShowPasswordDiv>
            <LoginButton type="submit">{t("login")}</LoginButton>
            {loginFailure.errorStatus && (
              <ErrorMessage>*{loginFailure.error_msg}</ErrorMessage>
            )}
          </LoginForm>
        </LoginCard>
      </Wrapper>
    </>
  );
};

export default LoginPage;
