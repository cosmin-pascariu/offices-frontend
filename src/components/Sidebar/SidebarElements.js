import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const buttonColors = {
  cG: '#75ce55',
  cB: '#3c3c3c',
  cW: '#fff',
  c8E: '#8e8e8e',
};

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 280px;
  min-width: 280px;
  background-color: #292929;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 30px 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SidebarLogo = styled.div`
  height: 53px;
  display: flex;
  align-items: center;
  color: #fff;
`;

export const SidebarTitle = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;

  h2 {
    font-size: 36px;
    padding-left: 25px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
  }
`;

export const SidebarMenu = styled.div`
  width: 70%;
  align-self: center;
`;

export const SidebarButton = styled(NavLink)`
  width: 100%;
  display: flex;
  padding: 10px 0;
  text-decoration: none;
`;

export const Button = styled.div`
  height: 42px;
  width: 42px;
  background-color: ${({ uColor }) =>
    uColor ? buttonColors.cG : buttonColors.cB};
  color: ${({ bColor }) => (bColor ? buttonColors.cW : buttonColors.c8E)};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.div`
  /* height: 42px; */
  /* width: 100px; */
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${({ bColor }) => (bColor ? buttonColors.cW : buttonColors.c8E)};
`;
