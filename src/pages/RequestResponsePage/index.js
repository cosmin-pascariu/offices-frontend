import React, { useState } from "react";
import {
  ApproveButton,
  Label,
  RadioButtons,
  Content,
  RejectButton,
  RequestProfile,
  ResponseRequestContainer,
  Textarea,
  ImageRequest,
  NameRequest,
  RoleRequest,
  InfoRequest,
  TopContent,
  LeftContainer,
  RequestMessage,
} from "./RequestResponseElements";
import {
  Button,
  ButtonContent,
  ButtonsContainer,
} from "../AddUserPage/AddUserPageElements";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/images/employee.jpeg";
import Helmet from "react-helmet";
import Percentagebar from "../../components/PercentageBar";

const RequestResponse = ({ loggedInUser, setLoggedInUser }) => {
  console.log(loggedInUser);
  const [isApproveBtnActive, setIsApproveBtnActive] = useState(true);
  const [textArea, setTextArea] = useState(
    "Hi [name],\n\nYour request for remote work has been approved. I hope you continue to show the same involvement that you have had so" +
      " far.\n\nRegards,\n" +
      (loggedInUser?.first_name || "first") +
      " " +
      (loggedInUser?.last_name || "last")
  );

  const handleAproveBtn = () => {
    setIsApproveBtnActive(true);
  };

  const handleRejectBtn = () => {
    setIsApproveBtnActive(false);
    document.getElementById("approve-message").value = "";
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/requests";
    navigate(path);
  };

  return (
    <ResponseRequestContainer>
      <Helmet>
        <title>Offices | Request Response</title>
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
                onClick={handleAproveBtn}
                bColor={isApproveBtnActive}
                uColor={isApproveBtnActive}
              >
                Approve
              </ApproveButton>
              <RejectButton
                id="reject-button"
                onClick={handleRejectBtn}
                bColor={!isApproveBtnActive}
                uColor={!isApproveBtnActive}
              >
                Reject
              </RejectButton>
            </RadioButtons>
          </Content>
        </LeftContainer>
        <LeftContainer>
          <RequestMessage>
            The message sent by the employee will be displayed here.
          </RequestMessage>
          <Content>
            <Percentagebar></Percentagebar>
          </Content>
        </LeftContainer>
      </TopContent>
      <Content
        style={{ marginBottom: "20px", minHeight: "260px", width: "100%" }}
      >
        {isApproveBtnActive ? (
          <>
            <Label>Message approval</Label>
            <Textarea
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
              style={{ resize: "none" }}
              id="approve-message"
            ></Textarea>
          </>
        ) : (
          <>
            <Label>The reason why the request is rejected</Label>
            <Textarea style={{ resize: "none" }} id="reject-message"></Textarea>
          </>
        )}
      </Content>

      <ButtonsContainer style={{ marginLeft: "5%" }}>
        <ButtonContent style={{ alignItems: "flex-end" }}>
          <Button>SEND</Button>
        </ButtonContent>
        <ButtonContent>
          <Button onClick={routeChange}>CANCEL</Button>
        </ButtonContent>
      </ButtonsContainer>
    </ResponseRequestContainer>
  );
};

export default RequestResponse;
