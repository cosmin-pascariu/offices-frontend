import React from "react";
import {
  AddUserContainer,
  Input,
  InputContent,
  Title,
  InputContainer,
  Label,
  Button,
  InputSmallContent,
  SmallInput,
} from "./AddUserPageElements";

const AddUser = () => {
  return (
    <AddUserContainer>
      <Title>Add New User</Title>
      <InputContainer>
        <InputContent>
          <Label>First Name</Label>
          <Input type={"text"} />
        </InputContent>
        <InputContent>
          <Label>Last Name</Label>
          <Input type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label>E-mail Address</Label>
          <Input type={"email"} />
        </InputContent>
        <InputContent>
          <Label>Work Model</Label>
          <Input type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label>Password</Label>
          <Input type={"text"} />
        </InputContent>
        <InputSmallContent>
          <Label>Building</Label>
          <SmallInput type={"text"} />
        </InputSmallContent>
        <InputSmallContent>
          <Label>Office</Label>
          <SmallInput type={"text"} />
        </InputSmallContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label>Role</Label>
          <Input type={"text"} />
        </InputContent>
        <InputContent>
          <Label>Gender (Optional)</Label>
          <Input type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label>Birth Date</Label>
          <Input type={"date"} />
        </InputContent>
        <InputContent>
          <Label>Nationallity (Optional)</Label>
          <Input type={"text"} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent style={{ alignItems: "flex-end" }}>
          <Button to="/users">SAVE</Button>
        </InputContent>
        <InputContent>
          <Button to="/users">CANCEL</Button>
        </InputContent>
      </InputContainer>
    </AddUserContainer>
  );
};

export default AddUser;
