import styled from "styled-components";
import { desktop, desktopLarge, tablet } from "~/styles/theme";

interface WrapperProps {
  width: string;
  border?: boolean;
}
interface ContentContainerProps {
  padding?: string;
  gap?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => props.width};
  display: flex;
  justify-content: center;
  border-bottom: ${(props) =>
    props.border
      ? `1px solid ${props.theme.colors.darkBlue};`
      : `0px solid ${props.theme.colors.lightBlue}`};
`;

export const ContentContainer = styled.div<ContentContainerProps>`
  padding: ${(props) => (props.padding ? props.padding : "35px 10px")};
  display: flex;
  overflow-x: auto;
  overflow-y: none;
  gap: ${(props) => (props.gap ? "0" : "20px")};
  display: flex;
  width: 100%;
`;
