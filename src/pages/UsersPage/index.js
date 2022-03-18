import React, { useState, useEffect } from "react";
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
  const [searchedName, setSearchedName] = useState("");
  const [users, setUsers] = useState([]);

  const getUsersFromDB = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };
    const response = await fetch(
      "https://offices-backend.herokuapp.com/api/users",
      requestOptions
    );
    const data = await response.json();
    if (data?.length) {
      setUsers(data);
      console.log(data);
      console.log(data[1].id);
      return;
    }
    setUsers([]);
    console.log(data);
  };

  useEffect(() => {
    getUsersFromDB();
  }, []);

  const searchName = () => {};

  let navigate = useNavigate();

  const duplicate = (x, n) => Array.from(new Array(n), () => x);
  const n = 50;
  const oneComp = (
    <UserDetails>
      <NameTxt>Vasile Bordei</NameTxt>
      <BuildingTxt>C2</BuildingTxt>
      <OfficeTxt>01</OfficeTxt>
      <RemoteTxt>fully</RemoteTxt>
      <div style={{ display: "flex", padding: "15px" }}>
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
      </div>
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
            value={searchedName}
            onChange={(e) => setSearchedName(e.target.value)}
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

      <Table>
        <TableInfo>
          <NameTxt>Name</NameTxt>
          <BuildingTxt>Building</BuildingTxt>
          <OfficeTxt>Office</OfficeTxt>
          <RemoteTxt>Remote</RemoteTxt>
          <ActionsTxt>Actions</ActionsTxt>
        </TableInfo>
        {users
          .filter((el) => {
            //if no input the return the original
            if (searchedName === "") {
              return el;
            }
            //return the item which contains the user input
            else {
              return (el.first_name + el.last_name)
                .toLowerCase()
                .includes(searchedName);
            }
          })
          .map((user) => (
            <UserDetails key={user.id}>
              <NameTxt>
                {user.first_name} {user.last_name}
              </NameTxt>
              <BuildingTxt>{user.building_id || "not set"}</BuildingTxt>
              <OfficeTxt>{user.office_id || "not set"}</OfficeTxt>
              <RemoteTxt>
                {user.remote_percentage === 0
                  ? "no"
                  : user.remote_percentage === 100
                  ? "fully"
                  : user.remote_percentage + "%"}
              </RemoteTxt>
              <div style={{ display: "flex", padding: "15px" }}>
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
                    onClick={() => navigate("/users/user-info/")}
                    size={"100%"}
                  />
                </ActionBtn>
              </div>
            </UserDetails>
          ))}
      </Table>
    </UsersContainer>
  );
};

export default Users;
