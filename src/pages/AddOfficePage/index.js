import React from "react";
import Helmet from "react-helmet";
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
      <Helmet>
        <title>Offices | Add New Office</title>
      </Helmet>
      <Title>Add New Office</Title>

      <InputContainer>
        <InputContent>
          <Label fo="office-name">Office Name</Label>
          <Input id="office-name" type={"text"} />
        </InputContent>
        <InputContent>
          <Label for="building">Building</Label>
          <Input id="building" type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label for="floor-number">Floor Number</Label>
          <Input id="floor-number" type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label for="total-desks">Total Desks Count</Label>
          <Input is="total-desks" type={"text"} />
        </InputContent>
        <InputContent>
          <Label for="usable-desks">Usable Desks Count</Label>
          <Input id="usable-desks" type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent style={{ marginBottom: "100px" }}>
          <Label for="office-admin-name">
            Office Administrator Full Name (Optional)
          </Label>
          <Input id="office-admin-name" type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent style={{ alignItems: "flex-end" }}>
          <Button id="save-button">SAVE</Button>
        </InputContent>
        <InputContent>
          <Button id="cancel-button" onClick={routeChange}>
            CANCEL
          </Button>
        </InputContent>
      </InputContainer>
    </AddOfficeContainer>
  );
};

export default AddOffice;
