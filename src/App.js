import React from "react";
import { createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/LoginPage";
import MainContainer from "./components/MainContainer";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: rgb(185,185,185)transparent;
  }

  *::-webkit-scrollbar{
    width: 5px;
  }

  *::-webkit-scrollbar-track{
    background: transparent;
  }

  *::-webkit-scrollbar-thumb{
    background: rgb(185,185,185);
    border-radius: 20px;
    border: transparent;
  }
  body{
    background: #fff;
    font-family: 'Roboto', sans-serif;
  }

  button{
    font-family: 'Roboto', sans-serif;
    letter-spacing: 2px;
  }

  input:-webkit-autofill { 
    -webkit-background-color: #f8f8f8;
}
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="*" element={<MainContainer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
