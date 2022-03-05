import React from "react";
import Sidebar from "../Sidebar";
import { Container, Navigator } from "./MainContainerElements";

const MainContainer = () => {
  return (
    <Container>
      <Navigator>
        <Sidebar />
      </Navigator>
      {/* <RouterContainer /> */}
    </Container>
  );
};

export default MainContainer;
