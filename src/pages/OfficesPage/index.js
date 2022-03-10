import React, { useState } from 'react';
import {
  Searchbar,
  InputText,
  SearchbarBtn,
  AddButton,
} from '../UsersPage/UsersPageElements';
import {
  OfficesContainer,
  OfficesSearch,
  FilterButton,
  FilterContent,
  TableInfo,
  NameTxt,
  BuildingTxt,
  FloorTxt,
  TotalDesksTxt,
  ActionsTxt,
  OfficeDetails,
  ActionBtn,
  Option,
  InputValue,
} from './OfficesPageElemets';
import { ImSearch } from 'react-icons/im';
import { VscSettings } from 'react-icons/vsc';
import { CgMoreO } from 'react-icons/cg';
import { BsPencil } from 'react-icons/bs';
import { MdKeyboardArrowRight as Arrow } from 'react-icons/md';
import './dropdown.css';
import { useNavigate } from 'react-router-dom';

const data = [
  { id: 0, label: 'Offices where Free Desks count' },
  { id: 1, label: 'Offices where Usable Desks count' },
  { id: 2, label: 'Offices where Total Desks count' },
  { id: 3, label: 'Offices where Occupation Percentage' },
];
const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    // eslint-disable-next-line eqeqeq
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(false);
  };

  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.id == selectedItem).label
          : 'Select one of the following options...'}
        <i className={`icon ${isOpen && 'open'}`}>
          <Arrow size={'20px'} />
        </i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map((item) => (
          <div
            className='dropdown-item'
            onClick={(e) => handleItemClick(e.target.id)}
            id={item.id}
          >
            <span
              className={`dropdown-item-dot ${
                item.id == selectedItem && 'selected'
              }`}
            >
              •{' '}
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const Offices = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toogleVisibility = () => {
    setIsVisible(!isVisible);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/offices/add-office';
    navigate(path);
  };
  return (
    <OfficesContainer>
      <OfficesSearch>
        <Searchbar>
          <InputText type={'text'} placeholder='Search user by name...' />
          <SearchbarBtn>
            <ImSearch size={'31px'} style={{ cursor: 'pointer' }} />
          </SearchbarBtn>
        </Searchbar>
        <FilterButton onClick={toogleVisibility}>
          <p>FILTER</p>
          <VscSettings
            size={'24px'}
            style={{ transform: 'rotate(90deg)', fontWeight: 'bolder' }}
          />
        </FilterButton>
        <AddButton onClick={routeChange}>ADD NEW</AddButton>
      </OfficesSearch>
      {isVisible && (
        <FilterContent>
          <Dropdown />
          {/* <DropDownMenu /> */}
          <p>is</p>
          <Option type={'radio'} checked>
            LESS
          </Option>
          <Option type={'radio'}>GREATER</Option>
          <p>than</p>
          <InputValue type={'number'} />
        </FilterContent>
      )}

      <TableInfo>
        <NameTxt>Name</NameTxt>
        <BuildingTxt>Building</BuildingTxt>
        <FloorTxt>Floor</FloorTxt>
        <TotalDesksTxt>Total Desks</TotalDesksTxt>
        <ActionsTxt>Actions</ActionsTxt>
      </TableInfo>

      <OfficeDetails>
        <NameTxt>M-39</NameTxt>
        <BuildingTxt>Seccondary</BuildingTxt>
        <FloorTxt>5</FloorTxt>
        <TotalDesksTxt>20</TotalDesksTxt>
        <ActionBtn>
          <BsPencil size={'100%'} />
        </ActionBtn>
        <ActionBtn>
          <CgMoreO size={'100%'} />
        </ActionBtn>
      </OfficeDetails>
      <OfficeDetails>
        <NameTxt>M-39</NameTxt>
        <BuildingTxt>Seccondary</BuildingTxt>
        <FloorTxt>5</FloorTxt>
        <TotalDesksTxt>20</TotalDesksTxt>
        <ActionBtn>
          <BsPencil size={'100%'} />
        </ActionBtn>
        <ActionBtn>
          <CgMoreO size={'100%'} />
        </ActionBtn>
      </OfficeDetails>
      <OfficeDetails>
        <NameTxt>M-39</NameTxt>
        <BuildingTxt>Seccondary</BuildingTxt>
        <FloorTxt>5</FloorTxt>
        <TotalDesksTxt>20</TotalDesksTxt>
        <ActionBtn>
          <BsPencil size={'100%'} />
        </ActionBtn>
        <ActionBtn>
          <CgMoreO size={'100%'} />
        </ActionBtn>
      </OfficeDetails>
      <OfficeDetails>
        <NameTxt>M-39</NameTxt>
        <BuildingTxt>Seccondary</BuildingTxt>
        <FloorTxt>5</FloorTxt>
        <TotalDesksTxt>20</TotalDesksTxt>
        <ActionBtn>
          <BsPencil size={'100%'} />
        </ActionBtn>
        <ActionBtn>
          <CgMoreO size={'100%'} />
        </ActionBtn>
      </OfficeDetails>
      <OfficeDetails>
        <NameTxt>M-39</NameTxt>
        <BuildingTxt>Seccondary</BuildingTxt>
        <FloorTxt>5</FloorTxt>
        <TotalDesksTxt>20</TotalDesksTxt>
        <ActionBtn>
          <BsPencil size={'100%'} />
        </ActionBtn>
        <ActionBtn>
          <CgMoreO size={'100%'} />
        </ActionBtn>
      </OfficeDetails>
      <OfficeDetails>
        <NameTxt>M-39</NameTxt>
        <BuildingTxt>Seccondary</BuildingTxt>
        <FloorTxt>5</FloorTxt>
        <TotalDesksTxt>20</TotalDesksTxt>
        <ActionBtn>
          <BsPencil size={'100%'} />
        </ActionBtn>
        <ActionBtn>
          <CgMoreO size={'100%'} />
        </ActionBtn>
      </OfficeDetails>
    </OfficesContainer>
  );
};

export default Offices;
