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
import Percentagebar from "../../components/PercentageBar";

const ResponseRequest = () => {
  const [isApproveBtnActive, setIsApproveBtnActive] = useState(true);

  const handleAproveBtn = () => {
    setIsApproveBtnActive(true);
  };

  const handleRejectBtn = () => {
    setIsApproveBtnActive(false);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/requests";
    navigate(path);
  };
  const percentage = 66;

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
              id="approve-message"
              value="Hi [name],
              Your request for [..%] remote work has been approved. I hope you continue to show the same involvement that you have had so far.
              Regards,
              [admin name]"
            />
          </>
        ) : (
          <>
            <Label>The reason why the request is rejected</Label>
            <Textarea></Textarea>
          </>
        )}

        {/* <Textarea>{isApproveBtnActive ? "marce,l" : "tata"}</Textarea> */}
      </Content>

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
