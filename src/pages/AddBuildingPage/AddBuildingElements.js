import styled from "styled-components";

export const AddBuildingContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 50px;
  color: #292929;

  @media screen and (max-width: 768px) {
    padding: 50px 0 10px 50px;
    width: 100%;
  }
`;

export const AddressInputContent = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-right: 30px;
`;

export const AddressLabel = styled.label`
  color: #8e8e8e;
  font-size: 16px;
`;

export const AddressInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 25px;
  outline: none;
  border: none;
  background-color: #f8f8f8;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
`;

export const AddressExample = styled.p`
  color: #8e8e8e;
  font-size: 14px;
  font-weight: 300;
`;

export const BuildingImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
