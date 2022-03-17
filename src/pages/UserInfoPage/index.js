import React, { useEffect, useState } from "react";
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

const UserInfo = ({ userId }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/users";
    navigate(path);
  };

  const [user, setUser] = useState([]);
  const getUsersFromDB = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };
    const response = await fetch(
      `https://offices-backend.herokuapp.com/api/users/${userId}`,
      requestOptions
    );
    const data = await response.json();
    if (data?.length) {
      setUser(data);
      console.log(data);
      return;
    }
    setUser([]);
    console.log(data);
  };

  useEffect(() => {
    getUsersFromDB();
  }, []);

  return (
    <UserInfoContainer>
      <Helmet>
        <title>Offices | User Info</title>
      </Helmet>

      <RequestProfile>
        <ImageRequest src={Img} alt="Request profile" />
        <InfoRequest>
          <NameRequest>Mihai Margineanu</NameRequest>
          <RoleRequest>Administrator</RoleRequest>
        </InfoRequest>
      </RequestProfile>

      <InfoContainer>
        <InfoContent>
          <p>Email: mihaimargineanu@offices.com </p>
          <p>Birth date: 12/03/1989</p>
          <p>Gender: Male</p>
          <p>Nationality: Romanian</p>
        </InfoContent>
        <InfoContent>
          <p>Building: Main Building</p>
          <p>Office: C3</p>
          <p>Desk: 12</p>
          <p>Remote: full</p>
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
