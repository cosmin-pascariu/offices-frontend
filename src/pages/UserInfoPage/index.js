import React from "react";
import Helmet from "react-helmet";
import {
  ImageRequest,
  InfoRequest,
  NameRequest,
  RequestProfile,
  RoleRequest,
} from "../RequestResponsePage/RequestResponseElements";
import {
  ButtonContainer,
  InfoContainer,
  InfoContent,
  UserInfoContainer,
} from "./UserInfoPageElements";
import Img from "../../assets/images/employee.jpeg";
import { Button, InputContent } from "../AddUserPage/AddUserPageElements";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/users";
    navigate(path);
  };

  return (
    <UserInfoContainer>
      <Helmet>
        <title>Offices | User Info</title>
      </Helmet>
      <RequestProfile>
        <ImageRequest src={Img} alt="Request profile" />
        <InfoRequest>
          <NameRequest>Marian Margineanu</NameRequest>
          <RoleRequest>Employee</RoleRequest>
        </InfoRequest>
      </RequestProfile>

      <InfoContainer>
        <InfoContent>
          <p>Email: gabrielmunteanu@offices.com</p>
          <p>Birth date: 12/03/1995</p>
          <p>Gender: Male</p>
          <p>Nationality: Romanian</p>
        </InfoContent>
        <InfoContent style={{ paddingLeft: "100px" }}>
          <p>Building: C2</p>
          <p>Office: 01</p>
          <p>Desk: 03</p>
          <p>Remote: no</p>
        </InfoContent>
      </InfoContainer>

      <ButtonContainer>
        <InputContent
          style={{ height: "65px", alignItems: "flex-end", padding: "0" }}
        >
          <Button id="cancel-button" onClick={routeChange}>
            CANCEL
          </Button>
        </InputContent>
      </ButtonContainer>
    </UserInfoContainer>
  );
};

export default UserInfo;
