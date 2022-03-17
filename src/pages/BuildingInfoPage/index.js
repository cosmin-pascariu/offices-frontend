import React from "react";
import Helmet from "react-helmet";
import { Title } from "../AddUserPage/AddUserPageElements";
import {
  InfoContainer,
  InfoContent,
} from "../UserInfoPage/UserInfoPageElements";
import {
  Box,
  BuildingInfoContainer,
  PieChartContainer,
  PieChartDiagram,
  PieChartDiagramContainer,
  PieChartInfo,
  PieChartInfoContainer,
} from "./BuildingInfoPageElements";

const BuildingInfo = () => {
  return (
    <BuildingInfoContainer>
      <Helmet>
        <title>Offices | Building Info</title>
      </Helmet>
      <Title>Building Info</Title>

      <InfoContainer style={{ height: "20%" }}>
        <InfoContent style={{ fontSize: "20px" }}>
          <p>Total Offices: 20</p>
          <p>Desks: 240</p>
          <p>Usable Desks: 180</p>
        </InfoContent>
        <InfoContent style={{ fontSize: "20px" }}>
          <p>Occupied Desks: 155</p>
          <p>Free Desks: 25</p>
          <p>Occupation Percentage: 86%</p>
        </InfoContent>
      </InfoContainer>

      <PieChartContainer>
        <PieChartDiagramContainer>
          <PieChartDiagram />
        </PieChartDiagramContainer>
        <PieChartInfoContainer>
          <PieChartInfo>
            <Box />
            <p>Total number of occupied desks from the building</p>
          </PieChartInfo>
          <PieChartInfo>
            <Box />
            <p>Total number of free desks from the building</p>
          </PieChartInfo>
          <PieChartInfo>
            <Box />
            <p>Total number of unusable desks from the building</p>
          </PieChartInfo>
        </PieChartInfoContainer>
      </PieChartContainer>
    </BuildingInfoContainer>
  );
};

export default BuildingInfo;
