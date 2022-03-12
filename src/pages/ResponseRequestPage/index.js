import React, { useState } from "react";
import {
  ApproveButton,
  Label,
  RadioButtons,
  Content,
  RejectButton,
  RequestProfile,
  ResponseRequestContainer,
  Input,
  Textarea,
  ImageRequest,
  NameRequest,
  RoleRequest,
  InfoRequest,
  TopContent,
  LeftContainer,
  RequestMessage,
} from "./ResponseRequestElements";
import {
  Button,
  InputContainer,
  InputContent,
} from "../AddUserPage/AddUserPageElements";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/images/employee.jpeg";
import Helmet from "react-helmet";

const ResponseRequest = () => {
  const [isActive, setIsActive] = useState(true);
  const [isactive, setisactive] = useState(false);

  const handleAprove = () => {
    setIsActive(true);
    setisactive(false);
  };
  const handleReject = () => {
    setIsActive(false);
    setisactive(true);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/requests";
    navigate(path);
  };

  return (
    <ResponseRequestContainer>
      <Helmet>
        <title>Offices | Response Request</title>
      </Helmet>
      <TopContent>
        <LeftContainer>
          <RequestProfile>
            <ImageRequest src={Img} alt="Request profile" />
            <InfoRequest>
              <NameRequest>Marian Margineanu</NameRequest>
              <RoleRequest>Employee</RoleRequest>
            </InfoRequest>
          </RequestProfile>

          <Content>
            <Label>Remote Work Approval</Label>
            <RadioButtons>
              <ApproveButton
                id="approve-button"
                onClick={handleAprove}
                bColor={isActive}
                uColor={isActive}
              >
                Approve
              </ApproveButton>
              <RejectButton
                id="reject-button"
                onClick={handleReject}
                bColor={isactive}
                uColor={isactive}
              >
                Reject
              </RejectButton>
            </RadioButtons>
          </Content>
        </LeftContainer>
        <RequestMessage>
          The message sent by the employee will be displayed here.
        </RequestMessage>
      </TopContent>

      {isActive && (
        <Content style={{ marginBottom: "200px" }}>
          <Label>Remote Work Percentage</Label>
          <Input type={"text"} />
        </Content>
      )}
      {isactive && (
        <Content
          style={{ marginBottom: "20px", minHeight: "260px", width: "100%" }}
        >
          <Label>The reason why the request is rejected</Label>
          <Textarea />
        </Content>
      )}

      <InputContainer>
        <InputContent style={{ alignItems: "flex-end" }}>
          <Button>SEND</Button>
        </InputContent>
        <InputContent>
          <Button onClick={routeChange}>CANCEL</Button>
        </InputContent>
      </InputContainer>
    </ResponseRequestContainer>
  );
};

export default ResponseRequest;
