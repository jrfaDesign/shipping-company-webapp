import styled from "styled-components";

export const Container = styled.div``;

interface GraphContainerProps {
  width?: string;
  height?: string;
  padding?: string;
}

export const GraphContainer = styled.div<GraphContainerProps>`
  width: ${(props) => (props.width ? props.width : "300px")};
  padding: 20px 0px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.black02};
  background-color: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
