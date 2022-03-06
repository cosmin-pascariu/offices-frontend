import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarLogo,
  SidebarTitle,
  SidebarMenu,
  SidebarButton,
  Button,
  ButtonText,
} from "./SidebarElements";
import { ImOffice as Logo } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";

const Sidebar = () => {
  const [isItemActive, setIsItemActive] = useState(false);

  const toogleColor = () => {
    setIsItemActive(!isItemActive);
  };

  return (
    <SidebarContainer>
      <SidebarLogo>
        <Logo size={"40px"} />
        <SidebarTitle>
          <h2>Offices</h2>
        </SidebarTitle>
      </SidebarLogo>

      <SidebarMenu>
        <SidebarButton to="/users" onClick={toogleColor}>
          <Button
            uColor={isItemActive ? true : false}
            bColor={isItemActive ? true : false}
          >
            <FaUsers size={"50%"} />
          </Button>
          <ButtonText bColor={isItemActive ? true : false}>Users</ButtonText>
        </SidebarButton>
        <SidebarButton to="/buildings">
          <Button uColor={false} bColor={false}>
            <FaUsers size={"50%"} />
          </Button>
          <ButtonText bColor={false}>Buildings</ButtonText>
        </SidebarButton>
        <SidebarButton to="/offices">
          <Button uColor={false} bColor={false}>
            <FaUsers size={"50%"} />
          </Button>
          <ButtonText bColor={false}>Offices</ButtonText>
        </SidebarButton>
        <SidebarButton to="/requests">
          <Button uColor={false} bColor={false}>
            <FaUsers size={"50%"} />
          </Button>
          <ButtonText bColor={false}>Requests</ButtonText>
        </SidebarButton>
      </SidebarMenu>

      <SidebarButton to="/login" style={{ width: "70%" }}>
        <Button uColor={false} bColor={false}>
          <CgLogOut size={"50%"} />
        </Button>
        <ButtonText bColor={false}>Logout</ButtonText>
      </SidebarButton>
    </SidebarContainer>
  );
};

export default Sidebar;
