import React from "react";
import { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

const Login = ({ loggedInUser, setLoggedInUser }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const toogleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  let navigate = useNavigate();

  const getTokens = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    const response = await fetch(
      "https://offices-backend.herokuapp.com/api/token",
      requestOptions
    );
    const data = await response.json();
    console.log(data);

    if (data?.refresh) {
      localStorage.setItem("refresh", data.refresh);
      localStorage.setItem("access", data.access);
      return true;
    }
    return false;
  };

  const getUserInfo = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };
    const response = await fetch(
      "https://offices-backend.herokuapp.com/api/me",
      requestOptions
    );
    const data = await response.json();
    if (data?.email) {
      setLoggedInUser(data);
      navigate(data.role === "Admin" ? "/users" : "/my-requests");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (await getTokens()) {
      await getUserInfo();
    }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordVisibility ? "password" : "text"}
                id="password"
                placeholder="Password"
                style={{ paddingRight: "50px" }}
              ></FormInput>
            </FormInputs>
            <LoginButton onClick={(e) => handleLogin(e)}>LOGIN</LoginButton>
          </LoginForm>
        </LoginContent>
      </LoginContainer>
    </Container>
  );
};

export default Login;
