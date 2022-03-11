import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "./AddUserPageElements";

const AddUser = () => {
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

  return (
    <AddUserContainer>
      <Title>Add New User</Title>
      <InputContainer>
        <InputContent>
          <Label>First Name</Label>
          <Input type={"text"} />
        </InputContent>
        <InputContent>
          <Label>Last Name</Label>
          <Input type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label>E-mail Address</Label>
          <Input type={"email"} />
        </InputContent>
        <InputContent>
          <Label>Work Model</Label>
          <WorkModel>
            <WorkOption onClick={handlePhysical} uColor={isPhysical}>
              Physical
            </WorkOption>
            <WorkOption onClick={handleHybrid} uColor={isHybrid}>
              Hybrid
            </WorkOption>
            <WorkOption onClick={handleRemote} uColor={isRemote}>
              Remote
            </WorkOption>
            <Percentage type={"text"} id="percentage" />
          </WorkModel>
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label>Password</Label>
          <Input type={"text"} />
        </InputContent>
        <InputSmallContent>
          <Label>Building</Label>
          <SmallInput type={"text"} />
        </InputSmallContent>
        <InputSmallContent>
          <Label>Office</Label>
          <SmallInput type={"text"} />
        </InputSmallContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label>Role</Label>
          <Input type={"text"} />
        </InputContent>
        <InputContent>
          <Label>Gender (Optional)</Label>
          <Input type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label>Birth Date</Label>
          <Input type={"date"} />
        </InputContent>
        <InputContent>
          <Label>Nationallity (Optional)</Label>
          <Input type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent style={{ alignItems: "flex-end" }}>
          <Button to="/users">SAVE</Button>
        </InputContent>
        <InputContent>
          <Button onClick={routeChange}>CANCEL</Button>
        </InputContent>
      </InputContainer>
    </AddUserContainer>
  );
};

export default AddUser;
