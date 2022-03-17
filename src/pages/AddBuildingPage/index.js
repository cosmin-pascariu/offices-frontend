import React, { useEffect, useState } from "react";
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
  ButtonsContainer,
  ButtonContent,
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
  const [buildingName, setBuildingName] = useState("");
  const [floorCount, setFloorCount] = useState("");
  const [buildingAddress, setBuildingAddress] = useState("");

  const [building, setBuilding] = useState([]);
  const sendBuildingToBD = async (e) => {
    e.preventDefault();
    console.log(buildingName, floorCount, buildingAddress);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: JSON.stringify({
        name: buildingName,
        floors_count: floorCount,
        address: buildingAddress,
        img_url: "https://www.damianul.com",
      }),
    };
    console.log(requestOptions);
    const response = await fetch(
      "https://offices-backend.herokuapp.com/api/buildings/",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  };

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
          <Label for="buildingName">Building Name</Label>
          <Input
            value={buildingName}
            onChange={(e) => setBuildingName(e.target.value)}
            id="buildingName"
            type={"text"}
          />
        </InputContent>
        <InputContent>
          <Label for="floorCount">Floor Count</Label>
          <Input
            value={floorCount}
            onChange={(e) => setFloorCount(e.currentTarget.value)}
            id="florCount"
            type={"text"}
          />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <AddressInputContent>
          <AddressLabel for="buildingAddress">Building Address</AddressLabel>
          <AddressInput
            value={buildingAddress}
            onChange={(e) => setBuildingAddress(e.target.value)}
            id="buildingAddress"
            type={"text"}
          />
          <AddressExample>
            <em>Example: New York, Sweet Bakery Street, 25</em>
          </AddressExample>
        </AddressInputContent>
      </InputContainer>

      <BuildingImage>
        <ImagePicker />
      </BuildingImage>
      <ButtonsContainer style={{ transform: "scale(0.75)" }}>
        <ButtonContent style={{ alignItems: "flex-end" }}>
          <Button id="save-button" onClick={(e) => sendBuildingToBD(e)}>
            SAVE
          </Button>
        </ButtonContent>
        <ButtonContent>
          <Button id="cancel-button" onClick={routeChange}>
            CANCEL
          </Button>
        </ButtonContent>
      </ButtonsContainer>
    </AddBuildingContainer>
  );
};

export default AddBuilding;
