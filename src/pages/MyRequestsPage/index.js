import React from "react";
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";
import {
  PendingText,
  RequestContent,
  RequestInfo,
  RequestsContainer,
  RequestsTable,
  RequestsTitle,
  ViewButton,
} from "../RequestsPage/RequestsPageElements";
import {
  RequestTitle,
  StatusCircle,
  StatusContainer,
  StatusText,
} from "./MyRequestsPageElements";

const MyRequests = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/requests/my-requests";
    navigate(path);
  };

  const duplicate = (x, n) => Array.from(new Array(n), () => x);

  const n = 20;
  const oneComp = (
    <RequestContent>
      <RequestInfo>
        <RequestTitle>Desk Request</RequestTitle>
      </RequestInfo>
      <StatusContainer bgColor={false}>
        <StatusCircle bgColor={false} />
        <StatusText txtColor={false}>Approval</StatusText>
      </StatusContainer>
      <ViewButton id="view-buton" onClick={routeChange}>
        VIEW
      </ViewButton>
    </RequestContent>
  );
  const nComps = duplicate(oneComp, n);

  return (
    <RequestsContainer>
      <Helmet>
        <title>Offices | My Requests</title>
      </Helmet>
      <RequestsTitle>My Requests</RequestsTitle>

      <RequestsTable>{nComps}</RequestsTable>
    </RequestsContainer>
  );
};

export default MyRequests;
