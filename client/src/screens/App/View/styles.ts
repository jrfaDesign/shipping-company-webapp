import styled from "styled-components";
import { laptop, tablet } from "~/styles/theme";

export const AppContainer = styled.div`
  display: flex;
  height: 99vh;
`;

export const Body = styled.div`
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
  height: 100%;
  padding: 14px 14px;
  background-color: #e5e5e5;
`;

export const ContentWrapper = styled.div`
  height: 91.6vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface ContentContainerProps {
  open: boolean;
}
export const ContentContainer = styled.div<ContentContainerProps>`
  width: 100%;
  ${laptop} {
    //width: ${(props) =>
      props.open ? "-webkit-calc(100% - 290px)" : "-webkit-calc(100% - 60px)"};
    transition: all 0.2s ease;
  }
`;
