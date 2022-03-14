import styled from "styled-components";

export const RequestsContainer = styled.div`
  width: 90%;
  height: 90%;
  max-width: 1000px;
  max-height: calc(100vh - 76px - 50px);
`;

export const RequestsTitle = styled.h1`
  color: #292929;
  font-size: 26px;
  font-weight: 500;
  height: auto;
`;

export const RequestsTable = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin: 10px 0;
`;

export const RequestContent = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background-color: #fff;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  border-radius: 10px;
`;

export const RequestInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #666;
  justify-content: space-around;
  margin: 25px;
  font-weight: 400;
`;

export const Name = styled.p`
  font-size: 18px;
`;

export const Email = styled.p`
  font-size: 14px;
`;

export const PendingContainer = styled.div`
  width: 151px;
  height: 32px;
  background-color: #fdeeda;
  display: flex;
  border-radius: 16px;
  align-items: center;
  margin-left: 10%;
`;

export const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 10px;
  background-color: #f6ad41;
  margin: 7px;
`;

export const PendingText = styled.p`
  color: #f6ad41;
  font-size: 16px;
  font-weight: 600;
  margin-left: 22px;
`;

export const ViewButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 10px;
  background-color: #292929;
  outline: none;
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-left: auto;
  margin-right: 15px;
  cursor: pointer;

  &:hover {
    background-color: #424242;
  }
`;
