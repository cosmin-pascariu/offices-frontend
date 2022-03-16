import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background-color: #f8f8f8;
`;

export const RouterContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 30px;
  justify-content: center;
  align-items: flex-start;
  transition: filter 0.5s;
  background: #f8f8f8;
  ${({ sidebarStatus }) => !sidebarStatus} {
    filter: blur(2px) brightness(0.6);
    user-select: none;
    div,
    svg,
    button {
      pointer-events: none;
    }
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
