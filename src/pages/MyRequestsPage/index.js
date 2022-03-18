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

  const n = 10;
  const rejectComp = (
    <RequestContent>
      <RequestInfo>
        <RequestTitle>Desk Request</RequestTitle>
      </RequestInfo>
      <StatusContainer bgColor={false}>
        <StatusCircle bgColor={false} />
        <StatusText txtColor={false}>Rejected</StatusText>
      </StatusContainer>
      <ViewButton id="view-buton" onClick={routeChange}>
        VIEW
      </ViewButton>
    </RequestContent>
  );
  const approveComp = (
    <RequestContent>
      <RequestInfo>
        <RequestTitle>Desk Request</RequestTitle>
      </RequestInfo>
      <StatusContainer bgColor={true}>
        <StatusCircle bgColor={true} />
        <StatusText txtColor={true}>Approved</StatusText>
      </StatusContainer>
      <ViewButton id="view-buton" onClick={routeChange}>
        VIEW
      </ViewButton>
    </RequestContent>
  );
  const approveComps = duplicate(approveComp, n);
  const rejectComps = duplicate(rejectComp, n);

  return (
    <RequestsContainer>
      <Helmet>
        <title>Offices | My Requests</title>
      </Helmet>
      <RequestsTitle>My Requests</RequestsTitle>

      <RequestsTable>
        {approveComps}
        {rejectComps}
      </RequestsTable>
    </RequestsContainer>
  );
};

export default MyRequests;
