import React, { useState, useEffect, useLayoutEffect } from "react";
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
    overflow-x: hidden;
  }


  button{
    font-family: 'Roboto', sans-serif;
    letter-spacing: 2px;
    user-select: none;
  }

  input:-webkit-autofill { 
    -webkit-background-color: #f8f8f8;
}


svg text{
    user-select: none;
  }

  /* Chrome, Safari, Edge, Opera*/
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }   

  
  /* input[type=number] {
    -moz-appearance: textfield;
    text-align: center;
  } */
`;

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  useLayoutEffect(() => {
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
        console.log(data);
        return;
      }
      setLoggedInUser(null);
      console.log(data);
    };

    getUserInfo();
  }, []);
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        {!loggedInUser && (
          <Route
            path="/login"
            element={
              <Login
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
              />
            }
          ></Route>
        )}
        <Route
          path="/"
          element={
            !loggedInUser ? (
              <Navigate to="/login" replace />
            ) : loggedInUser?.role === "Admin" ? (
              <Navigate to="/users" replace />
            ) : (
              <Navigate to="/my-requests" replace />
            )
          }
        ></Route>
        <Route
          path="*"
          element={
            <MainContainer
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
