import {
  SidebarContainer,
  SidebarLogo,
  SidebarTitle,
  SidebarMenu,
  SidebarButton,
  Button,
  ButtonText,
  LogoutButton,
} from "./SidebarElements";
import { ImOffice as Logo } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("refresh");
    localStorage.removeItem("access");
    navigate("/login");
  };

  return (
    <SidebarContainer>
      <SidebarLogo to="/">
        <Logo size={"40px"} />
        <SidebarTitle>
          <h2>Offices</h2>
        </SidebarTitle>
      </SidebarLogo>

      <SidebarMenu>
        <SidebarButton id="users-button" to="/users">
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
        <SidebarButton id="buildings-button" to="/buildings">
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
        <SidebarButton id="offices-button" to="/offices">
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
        <SidebarButton id="requests-button" to="/requests">
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

      <LogoutButton
        id="logout-button"
        onClick={(e) => handleLogout(e)}
        style={{ width: "70%" }}
      >
        <Button uColor={false} bColor={false}>
          <CgLogOut size={"50%"} />
        </Button>
        <ButtonText bColor={false}>Logout</ButtonText>
      </LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
