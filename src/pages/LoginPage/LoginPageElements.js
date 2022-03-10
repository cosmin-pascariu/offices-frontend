import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: url("../../images/loginBg.jpeg") no-repeat center center fixed; */
  /* background: url("https://r1.ilikewallpaper.net/ipad-pro-wallpapers/download/100031/dark-blur-abstract-4k-ipad-pro-wallpaper-ilikewallpaper_com.jpg")
    no-repeat center center fixed;
  background-size: cover; */
  background: linear-gradient(90deg, #0b0720, #081b39, #360b1f);
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  max-height: 700px;
  display: flex;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  margin: 20px;

  * {
    font-family: 'Roboto', sans-serif;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;

    margin: 0;
    max-height: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
`;

export const LoginImage = styled.div`
  width: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 85%;
`;

export const LoginContent = styled.div`
  width: 50%;
  display: flex;
  background-color: #e4e2e2;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormTitle = styled.h1`
  font-size: 36px;
  font-weight: 300;
  color: #292929;
  margin-bottom: 40px;
  text-align: center;
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 253px;
`;

export const FormInput = styled.input`
  height: 40px;
  width: 100%;
  max-width: 253px;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  padding: 0 25px;
  outline: none;

  &::placeholder {
    color: #8e8e8e;
  }
`;

export const IconPass = styled.span`
  position: relative;
  top: 27px;
  left: 40%;
  width: 20px;
  height: 15px;
  cursor: pointer;
`;

export const LoginButton = styled(Link)`
  background-color: rgba(117, 206, 85, 0.8);
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bolder;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-top: 40px;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(117, 206, 85, 1);
  }
`;
