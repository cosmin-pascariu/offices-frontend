import styled from "styled-components";

export const BuildingsContainer = styled.div`
  width: 90%;
  max-width: 1000px;
`;

export const BuildingsSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 120px;

    div {
      width: 100%;
    }
  }
`;

export const BuildingsContent = styled.div`
  margin-top: 25px;
  max-width: 100%;
  width: auto;
  max-height: 550px;
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

  @media (max-width: 500px) {
    height: auto;
    width: 100%;
    margin: 25px;
  }
`;

export const BuildingImage = styled.img`
  width: 100%;
  height: 182px;
  border-radius: 10px 10px 0 0;
  background-color: #434532;
  object-fit: cover;
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
