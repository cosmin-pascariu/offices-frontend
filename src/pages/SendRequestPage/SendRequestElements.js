import styled from "styled-components";

export const SendRequestContainer = styled.div`
  width: 90%;
  height: 90%;
  max-width: 1200px;
  max-height: 800px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 50px 150px 50px 150px;
  color: #292929;
`;

export const MessageContainer = styled.div`
  width: 100%:
  display: flex:
  flex-direction: column;
`;

export const Message = styled.textarea`
  width: 100%;
  height: 350px;
  min-height: 216px;
  outline: none;
  border: none;
  padding: 25px;
  background-color: #f8f8f8;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
`;
