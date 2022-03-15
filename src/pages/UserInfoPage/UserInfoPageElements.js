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
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 50%;
  background: red;
  display: flex;
  margin-top: 30px;
  border-radius: 10px;
  padding: 25px 40px 25px 40px;
  background: #f8f8f8;
`;

export const InfoContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #3c3c3c;
  justify-content: space-around;
  font-size: 24px;
  font-weight: 400px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  justify-content: flex-end;
`;
