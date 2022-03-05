import React from "react";
import Navbar from "../NavbarPage";
import Sidebar from "../Sidebar";
import { Container, Navigator } from "./MainContainerElements";

const MainContainer = () => {
  return (
    <Container>
      <Navigator>
        <Sidebar />
        <Navbar />
      </Navigator>
      {/* <RouterContainer /> */}
    </Container>
  );
};

export default MainContainer;
