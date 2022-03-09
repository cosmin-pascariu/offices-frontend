import styled from "styled-components";

export const AddUserContainer = styled.form`
  width: 90%;
  height: 90%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 50px 150px 50px 150px;
  color: #292929;
`;

export const Title = styled.p`
  color: #292929;
  font-size: 31px;
  font-weight: 400;
  width: auto;
  margin-bottom: 25px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const InputContent = styled.div`
  width: 50%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-right: 30px;
`;

export const InputSmallContent = styled.div`
  width: 25%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-right: 30px;
`;

export const Label = styled.label`
  color: #8e8e8e;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 355px;
  height: 50px;
  padding: 0 25px;
  outline: none;
  border: none;
  background-color: #f8f8f8;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
`;

export const SmallInput = styled.input`
  width: 160px;
  height: 50px;
  padding: 0 25px;
  outline: none;
  border: none;
  background-color: #f8f8f8;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  background-color: #292929;
  width: 162px;
  height: 62px;
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

  &:hover {
    background-color: #424242;
  }
`;
