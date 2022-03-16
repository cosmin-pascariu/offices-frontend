import styled from "styled-components";

export const NavbarContiner = styled.div`
  height: 80px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 25px;
  position: sticky;
  top: 0;
  z-index: 10;
  p {
    display: none;
  }
  @media (max-width: 768px) {
    background-color: #292929;
    border-bottom: 1px solid #555555;
    p {
      width: 100%;
      display: flex;
      justify-content: center;

      svg {
        display: none;
      }

      div {
        margin-top: -6px;
      }
      h2 {
        color: white;
      }
    }
  }
`;

export const NavbarText = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: #292929;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarProfile = styled.div`
  width: 200px;
  display: flex;

  @media (max-width: 768px) {
    width: auto;
    position: fixed;
    right: 20px;
    top: 15px;
    user-select: none;
    div {
      display: none;
    }
  }
`;

export const ImageProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
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

export const Hamburger = styled.div`
  height: 50px;
  width: 50px;
  color: #75ce55;
  display: flex;
  align-items: center;
  position: fixed;
  top: 15px;
  left: 25px;
  cursor: pointer;
  z-index: 100;

  svg {
    z-index: 100;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
