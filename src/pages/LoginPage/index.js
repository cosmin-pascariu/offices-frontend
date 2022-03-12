import React from "react";
import { useState } from "react";
import ImgLogin from "../../assets/images/loginimage.svg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  Container,
  LoginButton,
  LoginContainer,
  LoginImage,
  LoginContent,
  LoginForm,
  FormTitle,
  IconPass,
  FormInputs,
  FormInput,
  Img,
} from "./LoginPageElements";
import Helmet from "react-helmet";

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const toogleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <Container>
      <Helmet>
        <title>Offices | Login</title>
      </Helmet>
      <LoginContainer>
        <LoginImage>
          <Img src={ImgLogin} alt="Login image"></Img>
        </LoginImage>
        <LoginContent>
          <LoginForm id="form">
            <FormTitle>Login to Offices</FormTitle>
            <FormInputs>
              <FormInput
                type={"text"}
                id="email"
                placeholder="Email"
              ></FormInput>
              <IconPass>
                {passwordVisibility ? (
                  <FiEye onClick={toogleVisibility} />
                ) : (
                  <FiEyeOff onClick={toogleVisibility} />
                )}
              </IconPass>
              <FormInput
                type={passwordVisibility ? "password" : "text"}
                id="password"
                placeholder="Password"
                style={{ paddingRight: "50px" }}
              ></FormInput>
            </FormInputs>
            <LoginButton to="/users">LOGIN</LoginButton>
          </LoginForm>
        </LoginContent>
      </LoginContainer>
    </Container>
  );
};

export default Login;
