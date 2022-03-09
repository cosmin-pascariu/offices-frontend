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
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarContainer>
      <SidebarLogo to="/">
        <Logo size={"40px"} />
        <SidebarTitle>
          <h2>Offices</h2>
        </SidebarTitle>
      </SidebarLogo>

      <SidebarMenu>
        <SidebarButton to="/users">
          <Button
            uColor={location.pathname === "/users" ? true : false}
            bColor={location.pathname === "/users" ? true : false}
          >
            <FaUsers size={"50%"} />
          </Button>
          <ButtonText bColor={location.pathname === "/users" ? true : false}>
            Users
          </ButtonText>
        </SidebarButton>
        <SidebarButton to="/buildings">
          <Button
            uColor={location.pathname === "/buildings" ? true : false}
            bColor={location.pathname === "/buildings" ? true : false}
          >
            <FaUsers size={"50%"} />
          </Button>
          <ButtonText
            bColor={location.pathname === "/buildings" ? true : false}
          >
            Buildings
          </ButtonText>
        </SidebarButton>
        <SidebarButton to="/offices">
          <Button
            uColor={location.pathname === "/offices" ? true : false}
            bColor={location.pathname === "/offices" ? true : false}
          >
            <FaUsers size={"50%"} />
          </Button>
          <ButtonText bColor={location.pathname === "/offices" ? true : false}>
            Offices
          </ButtonText>
        </SidebarButton>
        <SidebarButton to="/requests">
          <Button
            uColor={location.pathname === "/requests" ? true : false}
            bColor={location.pathname === "/requests" ? true : false}
          >
            <FaUsers size={"50%"} />
          </Button>
          <ButtonText bColor={location.pathname === "/requests" ? true : false}>
            Requests
          </ButtonText>
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
