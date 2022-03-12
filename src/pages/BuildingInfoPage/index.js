import React from "react";
import Helmet from "react-helmet";
import { BuildingInfoContainer } from "./BuildingInfoPageElements";

const BuildingInfo = () => {
  return (
    <BuildingInfoContainer>
      <Helmet>
        <title>Offices | Building Info</title>
      </Helmet>
      <div>Data</div>
    </BuildingInfoContainer>
  );
};

export default BuildingInfo;
