import {
  NavbarContiner,
  NavbarText,
  NavbarProfile,
  ImageProfile,
  ProfileInfo,
  ProfileName,
  ProfileRole,
  Hamburger,
} from "./NavbarElements";
import { ImOffice as Logo } from "react-icons/im";
import Profile from "../../assets/images/admin.png";
import { useLocation } from "react-router-dom";
import { capitalize } from "../../common/utils";
import { SidebarLogo, SidebarTitle } from "../Sidebar/SidebarElements";
import { CgMenu, CgClose } from "react-icons/cg";

const Navbar = ({ sidebarStatus, setSidebarStatus }) => {
  const location = useLocation();
  const pageName = capitalize(location.pathname.slice(1));

  return (
    <NavbarContiner>
      <Hamburger onClick={() => setSidebarStatus(!sidebarStatus)}>
        {!sidebarStatus ? <CgMenu size={"80%"} /> : <CgClose size={"80%"} />}
      </Hamburger>
      <p>
        <SidebarLogo style={{ color: "#292929" }}>
          <Logo size={"40px"} />
          <SidebarTitle>
            <h2>Offices</h2>
          </SidebarTitle>
        </SidebarLogo>
      </p>
      <NavbarText>{pageName}</NavbarText>
      <NavbarProfile>
        <ImageProfile src={Profile} alt="Profile picture" />
        <ProfileInfo>
          <ProfileName>Pascariu Cosmin</ProfileName>
          <ProfileRole>Administrator</ProfileRole>
        </ProfileInfo>
      </NavbarProfile>
    </NavbarContiner>
  );
};

export default Navbar;
