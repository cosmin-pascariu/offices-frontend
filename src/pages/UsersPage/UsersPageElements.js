import styled from "styled-components";

export const UsersContainer = styled.div`
  width: 90%;
  height: 90%;
`;

export const UsersSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Searchbar = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const InputText = styled.input`
  width: 100%;
  height: 62px;
  background-color: #fff;
  border-radius: 10px 0 0 10px;
  padding-left: 25px;
  outline: none;
  border: none;
  font-size: 16px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
`;

export const SearchbarBtn = styled.div`
  height: 62px;
  width: 62px;
  background-color: #fff;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.1);
`;

export const AddButton = styled.button`
  background-color: #292929;
  width: 162px;
  height: 62px;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #424242;
  }
`;

export const TableInfo = styled.tr`
  width: 100%;
  height: 62px;
  margin-top: 25px;
  border-radius: 10px;
  background-color: #d8d8d8;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #3c3c3c;
  font-weight: 500;
  text-align: left;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
`;

export const NameTxt = styled.td`
  padding-left: 25px;
  width: 300px;
`;
export const BuildingTxt = styled.td`
  width: 220px;
`;
export const OfficeTxt = styled.td`
  width: 120px;
`;
export const RemoteTxt = styled.td`
  width: 300px;
`;
export const ActionsTxt = styled.td`
  width: auto;
`;

export const UserDetails = styled.tr`
  width: 100%;
  height: 62px;
  margin-top: 7px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #666666;
  font-weight: 200;
  text-align: left;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

  td {
    font-weight: 300;
  }
`;

export const ActionBtn = styled.div`
  width: 25px;
  height: 25px;
  color: #75ce55;
  margin-right: 20px;
  cursor: pointer;
`;
