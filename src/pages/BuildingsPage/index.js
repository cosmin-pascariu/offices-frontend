import React from "react";
import { ImSearch } from "react-icons/im";
import {
  BuildingsContainer,
  BuildingsSearch,
  BuildingsContent,
  BuildingCard,
  BuildingImage,
  CardInfo,
  BuildingName,
  FloorNumber,
  BuildingAddress,
} from "./BuildingsPageElements";
import {
  Searchbar,
  InputText,
  SearchbarBtn,
  AddButton,
} from "../UsersPage/UsersPageElements";
import MainBImg from "../../assets/images/mainBuilding.png";
import { FaBuffer } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";

const Buildings = () => {
  let navigate = useNavigate();
  const routeChangeAdd = () => {
    let path = "/buildings/add-building";
    navigate(path);
  };
  const routeChangeEdit = () => {
    let path = "/buildings/update-building";
    navigate(path);
  };
  const routeChangeInfo = () => {
    let path = "/buildings/building-info";
    navigate(path);
  };

  return (
    <BuildingsContainer>
      <Helmet>
        <title>Offices | Buildings</title>
      </Helmet>
      <BuildingsSearch>
        <Searchbar>
          <InputText
            id="searchbar"
            type={"text"}
            placeholder="Search user by name..."
          />
          <SearchbarBtn>
            <ImSearch
              id="searchbar-button"
              size={"50%"}
              style={{ cursor: "pointer", color: "#292929" }}
            />
          </SearchbarBtn>
        </Searchbar>
        <AddButton id="add-button" onClick={routeChangeAdd}>
          ADD NEW
        </AddButton>
      </BuildingsSearch>

      <BuildingsContent>
        <BuildingCard>
          <BuildingImage src={MainBImg} alt="Main Building" />
          <CardInfo>
            <BuildingName>Main Building</BuildingName>
            <FloorNumber>
              <p>5</p>
              <FaBuffer size={"14px"} />
            </FloorNumber>
          </CardInfo>

          <CardInfo>
            <BuildingAddress>
              Chicago, George Whashington Street, 13
            </BuildingAddress>
            <BsPencil
              id="update-button"
              onClick={routeChangeEdit}
              size={"14px"}
              style={{ color: "#75ce55", cursor: "pointer" }}
            />
            <CgMoreO
              id="info-button"
              onClick={routeChangeInfo}
              size={"15px"}
              style={{ color: "#75ce55", cursor: "pointer" }}
            />
          </CardInfo>
        </BuildingCard>
      </BuildingsContent>
    </BuildingsContainer>
  );
};

export default Buildings;
