import React from "react";
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";
import ImagePicker from "../../components/ImagePicker.js";
import {
  Title,
  InputContainer,
  InputContent,
  Label,
  Input,
  Button,
} from "../AddUserPage/AddUserPageElements";
import {
  AddBuildingContainer,
  AddressInputContent,
  AddressInput,
  AddressLabel,
  AddressExample,
  BuildingImage,
} from "./AddBuildingElements";

const AddBuilding = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/buildings";
    navigate(path);
  };
  return (
    <AddBuildingContainer>
      <Helmet>
        <title>Offices | Add New Building</title>
      </Helmet>
      <Title>Add New Building</Title>

      <InputContainer>
        <InputContent>
          <Label for="building-name">Building Name</Label>
          <Input id="building-name" type={"text"} />
        </InputContent>
        <InputContent>
          <Label for="for-count">Floor Count</Label>
          <Input id="for-count" type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <AddressInputContent>
          <AddressLabel for="building-address">Building Address</AddressLabel>
          <AddressInput id="building-address" type={"text"} />
          <AddressExample>
            <em>Example: New York, Sweet Bakery Street, 25</em>
          </AddressExample>
        </AddressInputContent>
      </InputContainer>

      <BuildingImage>
        <ImagePicker />
      </BuildingImage>
      <InputContainer style={{ transform: "scale(0.75)" }}>
        <InputContent style={{ alignItems: "flex-end" }}>
          <Button id="save-button">SAVE</Button>
        </InputContent>
        <InputContent>
          <Button id="cancel-button" onClick={routeChange}>
            CANCEL
          </Button>
        </InputContent>
      </InputContainer>
    </AddBuildingContainer>
  );
};

export default AddBuilding;
