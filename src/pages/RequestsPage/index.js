import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RequestsContainer,
  RequestsTitle,
  RequestContent,
  RequestInfo,
  Name,
  Email,
  PendingContainer,
  Circle,
  PendingText,
  ViewButton,
  RequestsTable,
} from './RequestsPageElements';

const Requests = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/requests/response-request';
    navigate(path);
  };

  const duplicate = (x, n) => Array.from(new Array(n), () => x);

  const n = 20;
  const oneComp = (
    <RequestContent>
      <RequestInfo>
        <Name>Marian Grigoriu</Name>
        <Email>marian.antoce@offices.com</Email>
      </RequestInfo>
      <PendingContainer>
        <Circle />
        <PendingText>Pending</PendingText>
      </PendingContainer>
      <ViewButton onClick={routeChange}>VIEW</ViewButton>
    </RequestContent>
  );
  const nComps = duplicate(oneComp, n);

  return (
    <RequestsContainer>
      <RequestsTitle>Remote work</RequestsTitle>

      <RequestsTable>{nComps}</RequestsTable>
    </RequestsContainer>
  );
};

export default Requests;
