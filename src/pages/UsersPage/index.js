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
  const routeChange = () => {
    let path = "/users/add-user";
    navigate(path);
  };
  const routeChangeUpdate = () => {
    let path = "/users/update-user";
    navigate(path);
  };
  const routeChangeInfo = () => {
    let path = "/users/user-info";
    navigate(path);
  };
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
              size={"31px"}
              style={{ cursor: "pointer" }}
            />
          </SearchbarBtn>
        </Searchbar>
        <AddButton id="add-button" onClick={routeChange}>
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
      <Table>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil
              id="edit-button"
              onClick={routeChangeUpdate}
              size={"100%"}
            />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO id="info-button" onClick={routeChangeInfo} size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
        <UserDetails>
          <NameTxt>Vasile Bordei</NameTxt>
          <BuildingTxt>C2</BuildingTxt>
          <OfficeTxt>01</OfficeTxt>
          <RemoteTxt>fully</RemoteTxt>
          <ActionBtn>
            <BsPencil size={"100%"} />
          </ActionBtn>
          <ActionBtn>
            <CgMoreO size={"100%"} />
          </ActionBtn>
        </UserDetails>
      </Table>
    </UsersContainer>
  );
};

export default Users;
