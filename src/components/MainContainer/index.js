import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Route, Routes } from "react-router-dom";
import {
  Container,
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
import UserInfo from "../../pages/UserInfoPage";
import BuildingInfo from "../../pages/BuildingInfoPage";
import SendRequest from "../../pages/SendRequestPage";
import MyRequests from "../../pages/MyRequestsPage";
import UpdateBuilding from "../../pages/UpdateBuildingPage";
import UpdateUser from "../../pages/UpdateUserPage";
import RequestResponse from "../../pages/RequestResponsePage";
import UpdateOffice from "../../pages/UpdateOfficePage";

const MainContainer = ({ loggedInUser, setLoggedInUser }) => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const handleClickOutside = (e) => {
    e.target.id !== "sidebar" && setSidebarStatus(false);
  };

  return (
    <Container>
      <Sidebar
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
        sidebarStatus={sidebarStatus}
        setSidebarStatus={setSidebarStatus}
        id="sidebar"
      />
      <MainContent>
        <Navbar
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
          sidebarStatus={sidebarStatus}
          setSidebarStatus={setSidebarStatus}
        />
        <RouterContainer
          sidebarStatus={sidebarStatus}
          onClick={(e) => handleClickOutside(e)}
        >
          <Routes>
            {loggedInUser?.role === "Admin" && (
              <Route path="/users" element={<Users />}></Route>
            )}
            <Route path="/buildings" element={<Buildings />}></Route>
            <Route path="/offices" element={<Offices />}></Route>
            <Route path="/requests" element={<Requests />}></Route>
            <Route path="/users/add-user" element={<AddUser />}></Route>
            <Route path="/users/update-user" element={<UpdateUser />}></Route>
            <Route
              path="/buildings/add-building"
              element={<AddBuilding />}
            ></Route>
            <Route path="/offices/add-office" element={<AddOffice />}></Route>
            <Route
              path="/requests/response-request"
              element={<RequestResponse />}
            ></Route>
            <Route path="/users/user-info" element={<UserInfo />}></Route>
            <Route
              path="/buildings/building-info"
              element={<BuildingInfo />}
            ></Route>
            <Route
              path="/requests/add-request"
              element={<SendRequest />}
            ></Route>
            <Route
              path="/requests/my-requests"
              element={<MyRequests />}
            ></Route>
            <Route
              path="/buildings/update-building"
              element={<UpdateBuilding />}
            ></Route>
            <Route path="/users/update-user" element={<UpdateUser />}></Route>
            <Route
              path="/offices/update-office"
              element={<UpdateOffice />}
            ></Route>
          </Routes>
        </RouterContainer>
      </MainContent>
    </Container>
  );
};

export default MainContainer;
