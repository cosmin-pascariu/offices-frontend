import styled from "styled-components";

export const ResponseRequestContainer = styled.div`
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
    padding: 50px 35px 5px 35px;
    width: 100%;
    box-shadow: 0;
  }
`;

export const TopContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const RequestMessage = styled.section`
  width: 100%;
  height: 50%;
  padding: 10px 0;
  border-radius: 10px;
  margin: 5px 0;
  font-size: 16px;
`;

export const RequestProfile = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ImageRequest = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const InfoRequest = styled.div`
  display: flex;
  height: 130px;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  margin-left: 15px;
`;

export const NameRequest = styled.h3`
  font-size: 26px;
  font-weight: 500;
  color: #292929;
`;

export const RoleRequest = styled.h5`
  font-size: 18px;
  font-weight: 300;
  color: #8e8e8e;
  margin-top: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 80px;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

export const Label = styled.label`
  color: #8e8e8e;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 360px;
  height: 50px;
  padding: 0 25px;
  outline: none;
  border: none;
  background-color: #f8f8f8;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 216px;
  min-height: 216px;
  outline: none;
  border: none;
  padding: 25px;
  background-color: #f8f8f8;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  white-space: pre-line;
`;

export const RadioButtons = styled.div`
  width: 220px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f8f8f8;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
`;

export const ApproveButton = styled.button`
  width: 95px;
  height: 36px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  background-color: ${({ uColor }) => (uColor ? "#75ce55" : "#f8f8f8")};
  color: ${({ bColor }) => (bColor ? "#fff" : "#3c3c3c")};
  border: none;
  outline: none;
  transition: 0.3s ease-in-out;
`;

export const RejectButton = styled.button`
  width: 95px;
  height: 36px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  background-color: ${({ uColor }) => (uColor ? "#ff0000" : "#f8f8f8")};
  color: ${({ bColor }) => (bColor ? "#fff" : "#3c3c3c")};
  border: none;
  outline: none;
  transition: 0.3s ease-in-out;
`;
