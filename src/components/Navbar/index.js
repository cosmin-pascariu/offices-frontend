import {
  NavbarContiner,
  NavbarText,
  NavbarProfile,
  ImageProfile,
  ProfileInfo,
  ProfileName,
  ProfileRole,
} from "./NavbarElements";
import Profile from "../../assets/images/admin.png";
import { useLocation } from "react-router-dom";
import { capitalize } from "../../common/utils";

const Navbar = () => {
  const location = useLocation();
  const pageName = capitalize(location.pathname.slice(1));

  return (
    <NavbarContiner>
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
