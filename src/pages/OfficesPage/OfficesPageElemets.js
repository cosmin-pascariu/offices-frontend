import styled from "styled-components";

export const OfficesContainer = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1000px;
  max-height: calc(100vh - 76px - 50px);
`;

export const OfficesSearch = styled.div`
  width: 100%;
  display: flex;

  button:last-of-type {
    margin-left: auto;
  }
`;

export const FilterButton = styled.button`
  background-color: #c4c4c4;
  width: 131px;
  height: 50px;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 10px;
  border: none;
  color: #292929;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #a4a4a4;
  }

  p {
    padding-right: 10px;
  }
`;

export const FilterContent = styled.div`
  width: 75.5%;
  height: 50px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  padding: 0 25px;

  p {
    color: #8e8e8e;
    margin: 0 10px;
  }
`;

export const Option = styled.button`
  height: 31px;
  border: none;
  background-color: ${({ uColor }) => (uColor ? "#3c3c3c" : "#c4c4c4")};
  color: #fff;
  padding: 0 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
`;

export const InputValue = styled.input`
  width: 106px;
  height: 31px;
  border-radius: 5px;
  background-color: #efefef;
  text-align: center;
  color: #3c3c3c;
  outline: none;
  border: none;
`;

export const TableInfo = styled.tr`
  width: 100%;
  max-width: 1050px;
  height: 50px;
  margin-top: 25px;
  border-radius: 10px;
  background-color: #c4c4c4;
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
export const FloorTxt = styled.td`
  width: 120px;
`;
export const TotalDesksTxt = styled.td`
  width: 300px;
`;
export const ActionsTxt = styled.td`
  width: auto;
  margin-right: 20px;
`;

export const OfficeDetails = styled.tr`
  width: 100%;
  max-width: 1050px;
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
`;

export const ActionBtn = styled.div`
  width: 25px;
  height: 25px;
  color: #75ce55;
  margin-right: 20px;
  cursor: pointer;
`;
