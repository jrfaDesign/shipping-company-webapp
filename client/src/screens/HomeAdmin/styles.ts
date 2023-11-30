import styled from "styled-components";

export const Container = styled.div``;

interface GraphContainerProps {
  width?: string;
  height?: string;
}

export const GraphContainer = styled.div<GraphContainerProps>`
  width: ${(props) => (props.width ? props.width : "300px")};

  padding: 40px 0;

  display: flex;
  align-items: center;
  margin-bottom: 10px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.black02};

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0);
`;
