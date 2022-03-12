import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Route, Routes } from "react-router-dom";
import {
  Container,
  Navigator,
  RouterContainer,
  MainContent,
} from "./MainContainerElements";
import Users from "../../pages/UsersPage";
import Buildings from "../../pages/BuildingsPage";
import Offices from "../../pages/OfficesPage";
import Requests from "../../pages/RequestsPage";
import AddUser from "../../pages/AddUserPage";
import AddBuilding from "../../pages/AddBuildingPage";
import AddOffice from "../../pages/AddOfficePage";
import ResponseRequest from "../../pages/ResponseRequestPage";
import UserInfo from "../../pages/UserInfoPage";
import BuildingInfo from "../../pages/BuildingInfoPage";

const MainContainer = () => {
  return (
    <Container>
      <Navigator>
        <Sidebar />
        <MainContent>
          <Navbar />
          <RouterContainer>
            <Routes>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/buildings" element={<Buildings />}></Route>
              <Route path="/offices" element={<Offices />}></Route>
              <Route path="/requests" element={<Requests />}></Route>
              <Route path="/users/add-user" element={<AddUser />}></Route>
              <Route path="/users/update-user" element={<AddUser />}></Route>
              <Route
                path="/buildings/add-building"
                element={<AddBuilding />}
              ></Route>
              <Route path="/offices/add-office" element={<AddOffice />}></Route>
              <Route
                path="/requests/response-request"
                element={<ResponseRequest />}
              ></Route>
              <Route path="/users/user-info" element={<UserInfo />}></Route>
              <Route
                path="/buildings/building-info"
                element={<BuildingInfo />}
              ></Route>
            </Routes>
          </RouterContainer>
        </MainContent>
      </Navigator>
    </Container>
  );
};

export default MainContainer;
