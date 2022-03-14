import styled from "styled-components";

export const AddUserContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 50px 25px 50px 50px;
  color: #292929;

  @media screen and (max-width: 768px) {
    padding: 50px 0 10px 50px;
  }
`;

export const Title = styled.p`
  color: #292929;
  font-size: 31px;
  font-weight: 400;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding-right: 30px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  max-height: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const InputContent = styled.div`
  width: 50%;
  min-width: 258px;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-right: 30px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const InputSmallContent = styled.div`
  width: 25%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-right: 30px;

  @media screen and (max-width: 768px) {
    padding-right: 10px;
  }
`;

export const Label = styled.label`
  color: #8e8e8e;
  font-size: 16px;
`;

export const Input = styled.input`
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

export const WorkModel = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 5px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

export const WorkOption = styled.button`
  height: 40px;
  width: 25%;
  border: none;
  background-color: ${({ uColor }) => (uColor ? "#75ce55" : "#c4c4c4")};
  color: #fff;
  padding: 0 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 8px;
    font-weight: 500;
    padding: 0 2px;
    margin: 0 2px;
  }
`;

export const Percentage = styled.input`
  height: 40px;
  width: 25%;
  border: none;
  outline: none;
  padding: 0 10px;
  background-color: #f8f8f8;
  border-radius: 10px;
  text-align: center;
`;

export const SmallInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 25px;
  outline: none;
  border: none;
  background-color: #f8f8f8;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const Button = styled.button`
  background-color: #292929;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  &:hover {
    background-color: #424242;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
`;

export const SwitchBtn = styled.button`
  width: 80px;
  height: 36px;
  background-color: ${({ bgColor }) => (bgColor ? "#ff0000" : "#75ce55")};
  border: none;
  border-radius: 999px;
  display: flex;
  align-items: center;
  transition: 0.2s ease-in-out;
`;

export const Ball = styled.div`
  width: 30px;
  height: 30px;
  background: #fff;
  margin: 0 4px;
  border-radius: 300px;
  transition: 0.2s ease-in-out;
`;
