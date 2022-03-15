import styled from "styled-components";

export const UsersContainer = styled.div`
  width: 100%;
  padding: 0 25px;
  max-width: 1000px;
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 30px;
`;

export const UsersSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 120px;

    div {
      width: 100%;
    }
  }
`;

export const Searchbar = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
`;

export const InputText = styled.input`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 10px 0 0 10px;
  padding-left: 25px;
  outline: none;
  border: none;
  font-size: 16px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

  &:placeholder {
    text-overflow: ellipsis;
  }
`;

export const SearchbarBtn = styled.span`
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.1);
`;

export const AddButton = styled.button`
  background-color: #292929;
  width: 140px;
  height: 50px;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #424242;
  }
`;

export const TableInfo = styled.th`
  width: 100%;
  height: 50px;
  margin-top: 24px;
  position: sticky;
  top: 81px;
  border-radius: 10px;
  background-color: #d8d8d8;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #3c3c3c;
  font-weight: 500;
  text-align: left;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding: 10px;

    td {
      width: 100%;
      padding: 4px 0;
    }
  }
  @media (max-width: 700px) and (min-width: 500px) {
    font-size: 16px;
  }
`;

export const NameTxt = styled.td`
  padding-left: 25px;
  width: 37%;
`;
export const BuildingTxt = styled.td`
  width: 18%;
`;
export const OfficeTxt = styled.td`
  width: 15%;
`;
export const RemoteTxt = styled.td`
  width: 20%;
`;
export const ActionsTxt = styled.td`
  width: 115px;
  padding-right: 20px;
`;

export const UserDetails = styled.tr`
  max-width: 1050px;
  width: 100%;
  height: 50px;
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

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding: 10px;

    td {
      width: 100%;
      padding: 4px 0;
    }
  }
`;

export const ActionBtn = styled.div`
  width: 23px;
  height: 23px;
  color: #75ce55;
  margin-right: 15px;
  cursor: pointer;
`;
