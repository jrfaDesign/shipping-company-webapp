import styled from "styled-components";

interface ContainerProps {
  height?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "70vh")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
