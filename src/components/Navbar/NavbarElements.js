import styled from "styled-components";

export const NavbarContiner = styled.div`
  height: 80px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

export const NavbarText = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: #292929;
`;

export const NavbarProfile = styled.div`
  width: 200px;
  display: flex;
`;

export const ImageProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`;

export const ProfileName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #292929;
`;

export const ProfileRole = styled.h5`
  font-size: 16px;
  font-weight: 300;
  color: #8e8e8e;
`;
