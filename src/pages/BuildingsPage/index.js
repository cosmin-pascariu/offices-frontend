import React, { useEffect, useState } from "react";
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
  const [buildings, setBuildings] = useState([]);

  const getBuildingsFromDB = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };
    const response = await fetch(
      "https://offices-backend.herokuapp.com/api/buildings",
      requestOptions
    );
    const data = await response.json();
    if (data?.length) {
      setBuildings(data);
      console.log(data);
      return;
    }
    setBuildings([]);
    console.log(data);
  };

  useEffect(() => {
    getBuildingsFromDB();
  }, []);

  const [searchedName, setSearchedName] = useState("");

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
            value={searchedName}
            onChange={(e) => setSearchedName(e.target.value)}
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
        {buildings.map((building) => (
          <BuildingCard key={building.id}>
            <BuildingImage src={MainBImg} alt="Main Building" />
            <CardInfo>
              <BuildingName>{building.name}</BuildingName>
              <FloorNumber>
                <p>{building.floors_count}</p>
                <FaBuffer size={"14px"} />
              </FloorNumber>
            </CardInfo>

            <CardInfo>
              <BuildingAddress>{building.address}</BuildingAddress>
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
        ))}
      </BuildingsContent>
    </BuildingsContainer>
  );
};

export default Buildings;
