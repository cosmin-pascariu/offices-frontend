import styled from "styled-components";

export const BuildingInfoContainer = styled.div`
  width: 90%;
  height: 90%;
  max-width: 1200px;
  max-height: 800px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 50px 75px 50px 75px;
  color: #292929;
`;

export const PieChartContainer = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
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
`;

export const PieChartInfo = styled.div`
  width: 40%;
  display: flex;

  p {
    font-size: 14px;
  }
`;

export const Box = styled.div`
  height: 10px;
  width: 10px;
  border: 1px solid #292929;
  background: #75ce55;
`;
