import React from 'react';
import { ImSearch } from 'react-icons/im';
import {
  BuildingsContainer,
  BuildingsSearch,
  BuildingsContent,
  BuildingCard,
  BuildingImage,
  CardInfo,
  BuildingName,
  FloorNumber,
  BuildingAddress,
} from './BuildingsPageElements';
import {
  Searchbar,
  InputText,
  SearchbarBtn,
  AddButton,
} from '../UsersPage/UsersPageElements';
import MainBImg from '../../assets/images/mainBuilding.png';
import { FaBuffer } from 'react-icons/fa';
import { BsPencil } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Buildings = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/buildings/add-building';
    navigate(path);
  };

  return (
    <BuildingsContainer>
      <BuildingsSearch>
        <Searchbar>
          <InputText type={'text'} placeholder='Search user by name...' />
          <SearchbarBtn>
            <ImSearch size={'31px'} />
          </SearchbarBtn>
        </Searchbar>
        <AddButton onClick={routeChange}>ADD NEW</AddButton>
      </BuildingsSearch>

      <BuildingsContent>
        <BuildingCard>
          <BuildingImage src={MainBImg} alt='Main Building' />
          <CardInfo>
            <BuildingName>Main Building</BuildingName>
            <FloorNumber>
              <p>5</p>
              <FaBuffer size={'14px'} />
            </FloorNumber>
          </CardInfo>

          <CardInfo>
            <BuildingAddress>
              Chicago, George Whashington Street, 13
            </BuildingAddress>
            <BsPencil size={'14px'} style={{ color: '#75ce55' }} />
          </CardInfo>
        </BuildingCard>
      </BuildingsContent>
    </BuildingsContainer>
  );
};

export default Buildings;
