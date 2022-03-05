import React from "react";
import Navbar from "../NavbarPage";
import Sidebar from "../Sidebar";
import { Route, Routes } from "react-router-dom";
import {
  Container,
  Navigator,
  RouterContainer,
  MainContent,
} from "./MainContainerElements";
import Users from "../UsersPage";
import Buildings from "../BuildingsPage";

const MainContainer = () => {
  return (
    <Container>
      <Navigator>
        <Sidebar />
        <MainContent>
          <Navbar />
          <RouterContainer>
            <Routes>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/buildings" element={<Buildings />}></Route>
            </Routes>
          </RouterContainer>
        </MainContent>
      </Navigator>
    </Container>
  );
};

export default MainContainer;
