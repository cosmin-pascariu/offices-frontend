import React from "react";
import Helmet from "react-helmet";
import Room from "../../components/Room";
import { AddOfficeContainer } from "./AddOfficePageElements";

const AddOffice = () => {
  return (
    <AddOfficeContainer>
      <Helmet>
        <title>Offices | Add New Office</title>
      </Helmet>

      <Room />
    </AddOfficeContainer>
  );
};

export default AddOffice;
