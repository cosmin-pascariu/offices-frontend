import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  InputContainer,
  InputContent,
  Label,
  Title,
} from "../AddUserPage/AddUserPageElements";
import { AddOfficeContainer } from "./AddOfficePageElements";

const AddOffice = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/offices";
    navigate(path);
  };

  return (
    <AddOfficeContainer>
      <Title>Add New Office</Title>

      <InputContainer>
        <InputContent>
          <Label>Office Name</Label>
          <Input type={"text"} />
        </InputContent>
        <InputContent>
          <Label>Building</Label>
          <Input type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label>Floor Number</Label>
          <Input type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label>Total Desks Count</Label>
          <Input type={"text"} />
        </InputContent>
        <InputContent>
          <Label>Usable Desks Count</Label>
          <Input type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent style={{ marginBottom: "100px" }}>
          <Label>Office Administrator Full Name (Optional)</Label>
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
    </AddOfficeContainer>
  );
};

export default AddOffice;
