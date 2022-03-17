import styled from "styled-components";

export const UserInfoContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 50px;
  color: #292929;

  @media (max-width: 768px) {
    width: 100%;
    padding: 50px 25px;
    height: calc(100vh - 120px);
    border-radius: 0;
    box-shadow: none;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  margin-top: 30px;
  border-radius: 10px;
  padding: 25px 40px 25px 40px;
  background: #f8f8f8;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 0 0 30px;

    div {
      max-width: 100%;
    }
  }

  @media (max-width: 550px) {
    div {
      font-size: 14px;
    }
  }
`;

export const InfoContent = styled.div`
  max-width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #3c3c3c;
  justify-content: space-around;
  font-size: 24px;
  font-weight: 400px;
  overflow-wrap: break-word;

  &:last-child {
    margin: auto;
  }

  @media (max-width: 768px) {
    &:last-child {
      margin: 0;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  justify-content: flex-end;
`;
