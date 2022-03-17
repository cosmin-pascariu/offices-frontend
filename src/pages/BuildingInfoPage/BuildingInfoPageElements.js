import styled from "styled-components";

export const BuildingInfoContainer = styled.div`
  width: 90%;
  max-width: 1000px;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 50px 75px 50px 75px;
  color: #292929;

  @media (max-width: 1000px) {
    width: 100%;
    box-shadow: 0;
    padding: 50px;
    border-radius: 0;

    /* section {
      display: flex;
      width: 100%;
      flex-direction: column;
    } */
  }
`;

export const PieChartContainer = styled.div`
  width: 100%;
  display: flex;
  height: 400px;

  @media (max-width: 1000px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`;

export const PieChartDiagramContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PieChartDiagram = styled.div`
  width: 80%;
  height: 80%;
  background: #f5ce55;
  border-radius: 444px;
`;

export const PieChartInfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const PieChartInfo = styled.p`
  width: 50%;
  display: flex;

  p {
    font-size: 14px;
  }
`;

export const Box = styled.span`
  height: 20px;
  width: 30px;
  margin-right: 8px;
  border: 1px solid #292929;
  background: #75ce55;
`;
