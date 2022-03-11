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
  }
  body{
    background: #fff;
    font-family: 'Roboto', sans-serif;;
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
