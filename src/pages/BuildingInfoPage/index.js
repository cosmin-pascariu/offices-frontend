import React from "react";
import Helmet from "react-helmet";
import {
  Button,
  InputContent,
  Title,
} from "../AddUserPage/AddUserPageElements";
import {
  ButtonContainer,
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
import { VictoryPie } from "victory-pie";
import { useNavigate } from "react-router-dom";

const myData = [
  { x: "Occupied Desks", y: 900 },
  { x: "Free Desks", y: 400 },
  { x: "Unusable Desks", y: 300 },
];
const BuildingInfo = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/buildings";
    navigate(path);
  };

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
          <div>
            <VictoryPie
              data={myData}
              colorScale={["#75ce55", "#e4e8e8", "#ff6464"]}
              radius={50}
            />
          </div>
        </PieChartDiagramContainer>
        <PieChartInfoContainer>
          <PieChartInfo>
            <Box />
            <p>Total number of occupied desks from the building</p>
          </PieChartInfo>
          <PieChartInfo>
            <Box style={{ backgroundColor: "#e4e8e8" }} />
            <p>Total number of free desks from the building</p>
          </PieChartInfo>
          <PieChartInfo>
            <Box style={{ backgroundColor: "#ff6464" }} />
            <p>Total number of unusable desks from the building</p>
          </PieChartInfo>
        </PieChartInfoContainer>
      </PieChartContainer>

      <ButtonContainer>
        <InputContent
          style={{ height: "65px", alignItems: "flex-end", padding: "0" }}
        >
          <Button id="cancel-button" onClick={routeChange}>
            CANCEL
          </Button>
        </InputContent>
      </ButtonContainer>
    </BuildingInfoContainer>
  );
};

export default BuildingInfo;
