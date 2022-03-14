import React from "react";
import {
  UsersContainer,
  UsersSearch,
  Searchbar,
  InputText,
  AddButton,
  SearchbarBtn,
  TableInfo,
  NameTxt,
  BuildingTxt,
  OfficeTxt,
  RemoteTxt,
  UserDetails,
  ActionsTxt,
  ActionBtn,
  Table,
} from "./UsersPageElements";
import { ImSearch } from "react-icons/im";
import { CgMoreO } from "react-icons/cg";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";

const Users = () => {
  let navigate = useNavigate();

  const duplicate = (x, n) => Array.from(new Array(n), () => x);
  const n = 50;
  const oneComp = (
    <UserDetails>
      <NameTxt>Vasile Bordei</NameTxt>
      <BuildingTxt>C2</BuildingTxt>
      <OfficeTxt>01</OfficeTxt>
      <RemoteTxt>fully</RemoteTxt>
      <ActionBtn>
        <BsPencil
          id="edit-button"
          onClick={() => navigate("/users/update-user")}
          size={"100%"}
        />
      </ActionBtn>
      <ActionBtn>
        <CgMoreO
          id="info-button"
          onClick={() => navigate("/users/user-info")}
          size={"100%"}
        />
      </ActionBtn>
    </UserDetails>
  );
  const nComps = duplicate(oneComp, n);
  return (
    <UsersContainer>
      <Helmet>
        <title>Offices | Users</title>
      </Helmet>
      <UsersSearch>
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
        <AddButton id="add-button" onClick={() => navigate("/users/add-user")}>
          ADD NEW
        </AddButton>
      </UsersSearch>

      <TableInfo>
        <NameTxt>Name</NameTxt>
        <BuildingTxt>Building</BuildingTxt>
        <OfficeTxt>Office</OfficeTxt>
        <RemoteTxt>Remote</RemoteTxt>
        <ActionsTxt>Actions</ActionsTxt>
      </TableInfo>
      <Table>{nComps}</Table>
    </UsersContainer>
  );
};

export default Users;
