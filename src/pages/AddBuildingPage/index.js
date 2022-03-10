import React from 'react';
import ImagePicker from '../../components/ImagePicker.js';
import {
  Title,
  InputContainer,
  InputContent,
  Label,
  Input,
  Button,
} from '../AddUserPage/AddUserPageElements';
import {
  AddBuildingContainer,
  AddressInputContent,
  AddressInput,
  AddressLabel,
  AddressExample,
  BuildingImage,
} from './AddBuildingElements';

const AddBuilding = () => {
  return (
    <AddBuildingContainer>
      <Title>Add New Building</Title>

      <InputContainer>
        <InputContent>
          <Label>Building Name</Label>
          <Input type={'text'} />
        </InputContent>
        <InputContent>
          <Label>Floor Count</Label>
          <Input type={'text'} />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <AddressInputContent>
          <AddressLabel>Building Address</AddressLabel>
          <AddressInput type={'text'} />
          <AddressExample>
            <em>Example: New York, Sweet Bakery Street, 25</em>
          </AddressExample>
        </AddressInputContent>
      </InputContainer>

      <BuildingImage>
        <ImagePicker />
      </BuildingImage>
      <InputContainer style={{ transform: 'scale(0.75)' }}>
        <InputContent style={{ alignItems: 'flex-end' }}>
          <Button to='/users'>SAVE</Button>
        </InputContent>
        <InputContent>
          <Button to='/users'>CANCEL</Button>
        </InputContent>
      </InputContainer>
    </AddBuildingContainer>
  );
};

export default AddBuilding;
