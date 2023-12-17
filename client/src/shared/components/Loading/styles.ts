import { desktop } from "./../../../styles/theme";
import styled from "styled-components";

interface ContainerProps {
  height?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
