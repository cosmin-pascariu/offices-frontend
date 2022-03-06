import styled from "styled-components";

export const BuildingsContainer = styled.div`
  width: 90%;
  height: 90%;
`;

export const BuildingsSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BuildingsContent = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const BuildingCard = styled.div`
  width: 257px;
  height: 257px;
  border-radius: 10px;
  margin-right: 25px;
  margin-bottom: 25px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const BuildingImage = styled.img`
  width: 100%;
  height: 182px;
  border-radius: 10px 10px 0 0;
  background-color: #434532;
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 37.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-top: 1px solid #f8f8f8;
`;

export const BuildingName = styled.p`
  font-size: 16px;
  color: #292929;
  font-weight: 500;
`;

export const FloorNumber = styled.div`
  display: flex;
  color: #8e8e8e;
  align-items: center;

  p {
    font-size: 14px;
    margin-right: 5px;
  }
`;

export const BuildingAddress = styled.p`
  font-size: 9px;
  color: #8e8e8e;
  font-weight: 300;
`;
