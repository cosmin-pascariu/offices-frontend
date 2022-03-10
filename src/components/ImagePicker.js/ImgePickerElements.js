import styled from 'styled-components';

export const ImgContainer = styled.div`
  height: 260px;
  width: 380px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */

  input[type='file'] {
    display: none;
    border-radius: 10px;
  }

  label {
    width: 350px;
    height: 238px;
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
`;

export const ImgHolder = styled.div`
  width: 350px;
  height: 238px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;
