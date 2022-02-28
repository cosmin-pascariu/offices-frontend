import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginPage";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #fff;
    font-family: Montserrat;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/login">Login</Link>
      </span>
      <span>
        <Link to="/users"> Users</Link>
      </span>
      <span>
        <Link to="/buildings"> Buildings</Link>
      </span>
      <span>
        <Link to="/offices"> Offices</Link>
      </span> */}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/buildings" element={<Buildings />}></Route>
        <Route path="/offices" element={<Offices />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>About</h2>;
}

function Buildings() {
  return <h2>Users</h2>;
}

function Offices() {
  return <h2>Offices</h2>;
}
