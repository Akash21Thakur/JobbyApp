import { useEffect, useState } from "react";

import { BreakLine, ErrorMessage, InputLabel, LoginButton, LoginCard, LoginForm, ShowPasswordDiv, SiteLogo, UserInput, Wrapper } from "./styleComponents";
import { useNavigate } from "react-router";

import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { LOGIN_API } from "../../constants/apiConstants";
import { WEBSITE_LOGO } from "../../constants/imageUrl";

const LoginPage = () => {
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
        // const history = useHistory();
        // const url= JSON.parse(homeVideosStore.urlHistory);
        // const previousLocation = JSON.parse(Cookies.get('previousLocation') as string);
        // Cookies.remove('previousLocation')
        // const previousLocation = JSON.parse(
        //   localStorage.getItem("previousLocation")!
        // );

        // console.log(localStorage.getItem("previousLocation"));
        // if (previousLocation) {
        //   // window.sessionStorage.removeItem('previousLocation');
        //   navigate(previousLocation.pathname + previousLocation.search);
        //   console.log("akash12345")
        //   // localStorage.removeItem("previousLocation")
        //   // navigate(previousLocation.pathname + url.search);
        // } else {
        //   // redirect to default page (e.g. dashboard)
        //   // ...
          navigate(-1);
        // }
        // handleSuccessLogin();
      } else {
        setLoginFailure({
          errorStatus: true,
          error_msg: data.error_msg,
        });
        console.log(data);
      }
    } catch (error: any) {
      console.error(error);
      // console.log('akashqq')
    }

    // setDetails({
    //     userName:'',
    //     password:''
    // })
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

  useEffect(()=>{

    const jwtToken = Cookies.get("jwt_token");
      if (jwtToken !== undefined) {
        console.log("Here")
        navigate(-1);
        // return <Navigate to="/" />
      }
  })


  return (
    <>
      <Wrapper>
        <LoginCard>
          <SiteLogo src={WEBSITE_LOGO} />
          <LoginForm onSubmit={handleSubmit}>
            <InputLabel>USERNAME</InputLabel>
            
            <UserInput
              value={userDetails.username}
              type="text"
              onChange={handleUsername}
            />
            <BreakLine />
            <InputLabel>PASSWORD</InputLabel>
            <BreakLine />
            <UserInput
              value={userDetails.password}
              type={show ? "text" : "password"}
              onChange={handlePassword}
            />

            <ShowPasswordDiv>
              <UserInput
                className="checkbox"
                type="checkbox"
                onChange={handleTogglePassword}
              />
              <InputLabel>Show Password</InputLabel>
            </ShowPasswordDiv>
            <LoginButton type="submit">Login</LoginButton>
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
