import React from "react";
import Helmet from "react-helmet";
import {
  Button,
  InputContainer,
  InputContent,
  Title,
} from "../AddUserPage/AddUserPageElements";
import { Input, Label } from "../ResponseRequestPage/ResponseRequestElements";
import {
  SendRequestContainer,
  Message,
  MessageContainer,
} from "./SendRequestElements";

const SendRequest = () => {
  return (
    <SendRequestContainer>
      <Helmet>
        <title>Offices | Add New Request</title>
      </Helmet>
      <Title>Add New Request</Title>

      <InputContainer>
        <InputContent>
          <Label for="remote-percentage">Remote Work Percentage</Label>
          <Input id="remote-percentage" type={"text"} />
        </InputContent>
      </InputContainer>

      <MessageContainer style={{ marginBottom: "50px" }}>
        <Label for="request-reason">The reason for the request</Label>
        <Message id="request-reason"></Message>
      </MessageContainer>

      <InputContainer>
        <InputContent style={{ alignItems: "flex-end" }}>
          <Button>SEND</Button>
        </InputContent>
        <InputContent>
          <Button>CANCEL</Button>
        </InputContent>
      </InputContainer>
    </SendRequestContainer>
  );
};

export default SendRequest;
