import React, { useState } from 'react';
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
} from './ResponseRequestElements';
import {
  Button,
  InputContainer,
  InputContent,
} from '../AddUserPage/AddUserPageElements';
import { useNavigate } from 'react-router-dom';
import Img from '../../assets/images/employee.jpeg';

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
    let path = '/requests';
    navigate(path);
  };

  return (
    <ResponseRequestContainer>
      <RequestProfile>
        <ImageRequest src={Img} alt='Request profile' />
        <InfoRequest>
          <NameRequest>Marian Margineanu</NameRequest>
          <RoleRequest>Employee</RoleRequest>
        </InfoRequest>
      </RequestProfile>

      <Content>
        <Label>Remote Work Approval</Label>
        <RadioButtons>
          <ApproveButton
            onClick={handleAprove}
            bColor={isActive}
            uColor={isActive}
          >
            Approve
          </ApproveButton>
          <RejectButton
            onClick={handleReject}
            bColor={isactive}
            uColor={isactive}
          >
            Reject
          </RejectButton>
        </RadioButtons>
      </Content>

      {isActive && (
        <Content style={{ marginBottom: '200px' }}>
          <Label>Remote Work Percentage</Label>
          <Input type={'text'} />
        </Content>
      )}
      {isactive && (
        <Content style={{ marginBottom: '20px', minHeight: '260px' }}>
          <Label>The reason why the request is rejected</Label>
          <Textarea />
        </Content>
      )}

      <InputContainer>
        <InputContent style={{ alignItems: 'flex-end' }}>
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
