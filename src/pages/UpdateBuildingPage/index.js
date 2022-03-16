import React, { useState } from "react";
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";
import ImagePicker from "../../components/ImagePicker.js";
import {
  AddBuildingContainer,
  AddressExample,
  AddressInputContent,
  AddressLabel,
  BuildingImage,
} from "../AddBuildingPage/AddBuildingElements";
import {
  Button,
  ButtonContent,
  ButtonsContainer,
  InputContainer,
  InputContent,
  Label,
  Title,
} from "../AddUserPage/AddUserPageElements";
import { BsPencil } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { EditAddressInput, EditInput } from "./UpdateBuildingPageElements.js";
import { SearchbarBtn } from "../UsersPage/UsersPageElements.js";

const UpdateBuilding = () => {
  const [buildingName, setBuildingName] = useState("");
  const [floorCount, setFloorCount] = useState("");
  const [buildingAddress, setBuildingAddress] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/buildings";
    navigate(path);
  };
  const [disableNameInput, setDisableNameInput] = useState(false);
  const [disableCountInput, setDisableCountInput] = useState(false);
  const [disableAddressInput, setDisableAddressInput] = useState(false);

  const handleDisableNameInput = () => {
    setDisableNameInput(!disableNameInput);
    document.getElementById("edit-building-name").disabled = disableNameInput;
  };
  const handleDisableCountInput = () => {
    setDisableCountInput(!disableCountInput);
    document.getElementById("edit-count").disabled = disableCountInput;
  };
  const handleDisableAddressInput = () => {
    setDisableAddressInput(!disableAddressInput);
    document.getElementById("edit-building-address").disabled =
      disableAddressInput;
  };

  return (
    <AddBuildingContainer>
      <Helmet>
        <title>Ofices | Update Building</title>
      </Helmet>
      <Title>Update Building</Title>

      <InputContainer>
        <InputContent>
          <Label for="edit-building-name">Building Name</Label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <EditInput
              value={buildingName}
              onChange={(e) => setBuildingName(e.target.value)}
              id="edit-building-name"
              type={"text"}
              disabled
            />
            <SearchbarBtn style={{ backgroundColor: "#f8f8f8" }}>
              {disableNameInput ? (
                <FiCheck
                  id="update-button"
                  size={"20px"}
                  onClick={handleDisableNameInput}
                  style={{
                    color: "#75ce55",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                />
              ) : (
                <BsPencil
                  id="update-button"
                  size={"20px"}
                  onClick={handleDisableNameInput}
                  style={{
                    color: "#75ce55",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                />
              )}
            </SearchbarBtn>
          </div>
        </InputContent>
        <InputContent>
          <Label for="edit-count">Floor Count</Label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <EditInput
              value={floorCount}
              onChange={(e) => setFloorCount(e.target.value)}
              id="edit-count"
              type={"text"}
              disabled
            />
            <SearchbarBtn style={{ backgroundColor: "#f8f8f8" }}>
              {disableCountInput ? (
                <FiCheck
                  id="update-button"
                  size={"20px"}
                  onClick={handleDisableCountInput}
                  style={{
                    color: "#75ce55",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                />
              ) : (
                <BsPencil
                  id="update-button"
                  size={"20px"}
                  onClick={handleDisableCountInput}
                  style={{
                    color: "#75ce55",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                />
              )}
            </SearchbarBtn>
          </div>
        </InputContent>
      </InputContainer>

      <InputContainer>
        <AddressInputContent>
          <AddressLabel for="edit-building-address">
            Building Address
          </AddressLabel>
          <div style={{ display: "flex", alignItems: "center" }}>
            <EditAddressInput
              value={buildingAddress}
              onChange={(e) => setBuildingAddress(e.target.value)}
              id="edit-building-address"
              type={"text"}
              disabled
            />
            <SearchbarBtn style={{ backgroundColor: "#f8f8f8" }}>
              {disableAddressInput ? (
                <FiCheck
                  id="update-button"
                  size={"20px"}
                  onClick={handleDisableAddressInput}
                  style={{
                    color: "#75ce55",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                />
              ) : (
                <BsPencil
                  id="update-button"
                  size={"20px"}
                  onClick={handleDisableAddressInput}
                  style={{
                    color: "#75ce55",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                />
              )}
            </SearchbarBtn>
          </div>
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
          <Button id="save-button">SAVE</Button>
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

export default UpdateBuilding;
