import styled from "styled-components";

export const UpdateOfficeContainer = styled.div`
  width: 90%;
  height: 90%;
  max-width: 1000px;
  max-height: 800px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 50px 150px 50px 150px;
  color: #292929;

  @media screen and (max-width: 768px) {
    padding: 50px 15px 5px 15px;
  }
`;
