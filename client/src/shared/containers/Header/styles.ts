import styled from "styled-components";
import { minWidth, maxWidth } from "styles/theme";

interface MainContainerProps {
  isVisible: boolean;
}

export const Wrapper = styled.div<MainContainerProps>`
  ${minWidth} {
    background: ${({ theme }) => theme.cardBackgroundColor};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  ${maxWidth} {
    transition: opacity 0.3s ease;
    visibility: ${(props: { isVisible: boolean }) =>
      props.isVisible ? "visible" : "hidden"};
    opacity: ${(props: { isVisible: boolean }) => (props.isVisible ? 1 : 0)};

    position: fixed;
    top: 0;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.cardBackgroundColor};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }
`;
export const Container = styled.div<MainContainerProps>`
  ${minWidth} {
    background: ${({ theme }) => theme.cardBackgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 70px;
  }

  ${maxWidth} {
    transition: opacity 0.3s ease;
    visibility: ${(props: { isVisible: boolean }) =>
      props.isVisible ? "visible" : "hidden"};
    opacity: ${(props: { isVisible: boolean }) => (props.isVisible ? 1 : 0)};

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

    top: 0;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.cardBackgroundColor};
  }
`;

export const MenuAndUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
