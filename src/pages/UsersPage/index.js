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

const Users = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/users/add-user";
    navigate(path);
  };
  return (
    <UsersContainer>
      <UsersSearch>
        <Searchbar>
          <InputText type={"text"} placeholder="Search user by name..." />
          <SearchbarBtn>
            <ImSearch size={"31px"} />
          </SearchbarBtn>
        </Searchbar>
        <AddButton onClick={routeChange}>ADD NEW</AddButton>
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
