import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AddUserContainer,
  Input,
  InputContent,
  Title,
  InputContainer,
  Label,
  Button,
  InputSmallContent,
  SmallInput,
  WorkModel,
  WorkOption,
  Percentage,
  SwitchContainer,
  SwitchBtn,
  Ball,
} from "./AddUserPageElements";

const AddUser = () => {
  const location = useLocation();
  const [switchVisibility, setSwitchVisibility] = useState(false);

  function vis() {
    if (location.pathname === "/users/add-user") setSwitchVisibility(false);
    if (location.pathname === "/users/update-user") setSwitchVisibility(true);
  }

  useEffect(() => {
    vis();
  }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/users";
    navigate(path);
  };
  const [isPhysical, setIsPhysical] = useState(true);
  const [isHybrid, setIsHybrid] = useState(false);
  const [isRemote, setIsRemote] = useState(false);

  const handlePhysical = () => {
    setIsPhysical(true);
    setIsHybrid(false);
    setIsRemote(false);
    document.getElementById("percentage").disabled = true;
    document.getElementById("percentage").style.backgroundColor = "#f8f8f8";
    document.getElementById("percentage").value = "";
  };
  const handleHybrid = () => {
    setIsPhysical(false);
    setIsHybrid(true);
    setIsRemote(false);
    document.getElementById("percentage").disabled = false;
    document.getElementById("percentage").style.backgroundColor = "#fff";
    document.getElementById("percentage").value = "";
  };
  const handleRemote = () => {
    setIsPhysical(false);
    setIsHybrid(false);
    setIsRemote(true);
    document.getElementById("percentage").disabled = true;
    document.getElementById("percentage").value = "100%";
    document.getElementById("percentage").style.backgroundColor = "#fff";
  };

  const [sActive, setSActive] = useState(true);
  const handleSActive = () => {
    setSActive(!sActive);
    document.getElementById("ball").style.transform = sActive
      ? "translate(40px,0)"
      : "";
  };

  return (
    <AddUserContainer>
      <Helmet>
        <title>Offices | Add New User</title>
      </Helmet>
      <Title>
        Add New User
        {switchVisibility && (
          <SwitchContainer>
            <SwitchBtn
              id="switch-button"
              onClick={handleSActive}
              bgColor={sActive}
            >
              <Ball id="ball" />
            </SwitchBtn>
          </SwitchContainer>
        )}
      </Title>
      <InputContainer>
        <InputContent>
          <Label for="first-name">First Name</Label>
          <Input id="first-name" type={"text"} />
        </InputContent>
        <InputContent>
          <Label for="last-name">Last Name</Label>
          <Input id="last-name" type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label for="email">E-mail Address</Label>
          <Input id="email" type={"email"} />
        </InputContent>
        <InputContent>
          <Label>Work Model</Label>
          <WorkModel>
            <WorkOption
              id="physical-button"
              onClick={handlePhysical}
              uColor={isPhysical}
            >
              Physical
            </WorkOption>
            <WorkOption
              id="hybrid-button"
              onClick={handleHybrid}
              uColor={isHybrid}
            >
              Hybrid
            </WorkOption>
            <WorkOption
              id="remote-button"
              onClick={handleRemote}
              uColor={isRemote}
            >
              Remote
            </WorkOption>
            <Percentage type={"text"} id="percentage" />
          </WorkModel>
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label for="password">Password</Label>
          <Input id="password" type={"text"} />
        </InputContent>
        <InputSmallContent>
          <Label for="building">Building</Label>
          <SmallInput id="building" type={"text"} />
        </InputSmallContent>
        <InputSmallContent>
          <Label for="office">Office</Label>
          <SmallInput id="office" type={"text"} />
        </InputSmallContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label for="role">Role</Label>
          <Input id="role" type={"text"} />
        </InputContent>
        <InputContent>
          <Label for="gender">Gender (Optional)</Label>
          <Input id="gender" type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label for="birth-date">Birth Date</Label>
          <Input id="birth-date" type={"date"} />
        </InputContent>
        <InputContent>
          <Label for="nationality">Nationality (Optional)</Label>
          <Input id="nationality" type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent style={{ alignItems: "flex-end" }}>
          <Button id="save-button" to="/users">
            SAVE
          </Button>
        </InputContent>
        <InputContent>
          <Button id="cancel-button" onClick={routeChange}>
            CANCEL
          </Button>
        </InputContent>
      </InputContainer>
    </AddUserContainer>
  );
};

export default AddUser;
