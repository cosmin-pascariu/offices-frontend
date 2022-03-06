import React, { useState } from "react";
import {
  Searchbar,
  InputText,
  SearchbarBtn,
  AddButton,
} from "../UsersPage/UsersPageElements";
import {
  OfficesContainer,
  OfficesSearch,
  FilterButton,
  FilterContent,
  TableInfo,
  NameTxt,
  BuildingTxt,
  FloorTxt,
  TotalDesksTxt,
  ActionsTxt,
  OfficeDetails,
  ActionBtn,
} from "./OfficesPageElemets";
import { ImSearch } from "react-icons/im";
import { VscSettings } from "react-icons/vsc";
import { CgMoreO } from "react-icons/cg";
import { BsPencil } from "react-icons/bs";

const Offices = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toogleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <OfficesContainer>
      <OfficesSearch>
        <Searchbar>
          <InputText type={"text"} placeholder="Search user by name..." />
          <SearchbarBtn>
            <ImSearch size={"31px"} style={{ cursor: "pointer" }} />
          </SearchbarBtn>
        </Searchbar>
        <FilterButton onClick={toogleVisibility}>
          <p>FILTER</p>
          <VscSettings
            size={"24px"}
            style={{ transform: "rotate(90deg)", fontWeight: "bolder" }}
          />
        </FilterButton>
        <AddButton>ADD NEW</AddButton>
      </OfficesSearch>
      {isVisible && <FilterContent />}

      <TableInfo>
        <NameTxt>Name</NameTxt>
        <BuildingTxt>Building</BuildingTxt>
        <FloorTxt>Floor</FloorTxt>
        <TotalDesksTxt>Total Desks</TotalDesksTxt>
        <ActionsTxt>Actions</ActionsTxt>
      </TableInfo>

      <OfficeDetails>
        <NameTxt>M-39</NameTxt>
        <BuildingTxt>Seccondary</BuildingTxt>
        <FloorTxt>5</FloorTxt>
        <TotalDesksTxt>20</TotalDesksTxt>
        <ActionBtn>
          <BsPencil size={"100%"} />
        </ActionBtn>
        <ActionBtn>
          <CgMoreO size={"100%"} />
        </ActionBtn>
      </OfficeDetails>
      <OfficeDetails>
        <NameTxt>M-39</NameTxt>
        <BuildingTxt>Seccondary</BuildingTxt>
        <FloorTxt>5</FloorTxt>
        <TotalDesksTxt>20</TotalDesksTxt>
        <ActionBtn>
          <BsPencil size={"100%"} />
        </ActionBtn>
        <ActionBtn>
          <CgMoreO size={"100%"} />
        </ActionBtn>
      </OfficeDetails>
      <OfficeDetails>
        <NameTxt>M-39</NameTxt>
        <BuildingTxt>Seccondary</BuildingTxt>
        <FloorTxt>5</FloorTxt>
        <TotalDesksTxt>20</TotalDesksTxt>
        <ActionBtn>
          <BsPencil size={"100%"} />
        </ActionBtn>
        <ActionBtn>
          <CgMoreO size={"100%"} />
        </ActionBtn>
      </OfficeDetails>
      <OfficeDetails>
        <NameTxt>M-39</NameTxt>
        <BuildingTxt>Seccondary</BuildingTxt>
        <FloorTxt>5</FloorTxt>
        <TotalDesksTxt>20</TotalDesksTxt>
        <ActionBtn>
          <BsPencil size={"100%"} />
        </ActionBtn>
        <ActionBtn>
          <CgMoreO size={"100%"} />
        </ActionBtn>
      </OfficeDetails>
      <OfficeDetails>
        <NameTxt>M-39</NameTxt>
        <BuildingTxt>Seccondary</BuildingTxt>
        <FloorTxt>5</FloorTxt>
        <TotalDesksTxt>20</TotalDesksTxt>
        <ActionBtn>
          <BsPencil size={"100%"} />
        </ActionBtn>
        <ActionBtn>
          <CgMoreO size={"100%"} />
        </ActionBtn>
      </OfficeDetails>
      <OfficeDetails>
        <NameTxt>M-39</NameTxt>
        <BuildingTxt>Seccondary</BuildingTxt>
        <FloorTxt>5</FloorTxt>
        <TotalDesksTxt>20</TotalDesksTxt>
        <ActionBtn>
          <BsPencil size={"100%"} />
        </ActionBtn>
        <ActionBtn>
          <CgMoreO size={"100%"} />
        </ActionBtn>
      </OfficeDetails>
    </OfficesContainer>
  );
};

export default Offices;
