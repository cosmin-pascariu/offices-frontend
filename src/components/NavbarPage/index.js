import React from "react";
import {
  NavbarContiner,
  NavbarText,
  NavbarProfile,
  ImageProfile,
  ProfileInfo,
  ProfileName,
  ProfileRole,
} from "./NavbarPageElements";
import img1 from "../../images/admin.png";

const Navbar = () => {
  return (
    <NavbarContiner>
      <NavbarText>Users</NavbarText>
      <NavbarProfile>
        <ImageProfile src={img1} alt="Profile picture" />
        <ProfileInfo>
          <ProfileName>Pascariu Cosmin</ProfileName>
          <ProfileRole>Administrator</ProfileRole>
        </ProfileInfo>
      </NavbarProfile>
    </NavbarContiner>
  );
};

export default Navbar;
