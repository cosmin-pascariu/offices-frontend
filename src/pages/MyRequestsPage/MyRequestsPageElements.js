import styled from "styled-components";

export const StatusContainer = styled.div`
  width: 151px;
  height: 32px;
  background-color: ${({ bgColor }) => (bgColor ? "#ddffd1" : "#ffd2d5")};
  display: flex;
  border-radius: 16px;
  align-items: center;
  margin-left: 15%;

  @media (max-width: 1000px) {
    margin-left: 5px;
    transform: scale(0.8);
  }
`;

export const RequestTitle = styled.p`
  font-size: 20px;
  color: #292929;
  font-weight: 400;
`;

export const StatusCircle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 10px;
  background-color: ${({ bgColor }) => (bgColor ? "#75ce55" : "#ff0000")};
  margin: 7px;
`;

export const StatusText = styled.p`
  color: ${({ txtColor }) => (txtColor ? "#75ce55" : "#ff0000")};
  font-size: 16px;
  font-weight: 600;
  margin-left: 22px;
`;
