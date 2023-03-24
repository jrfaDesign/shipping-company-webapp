import styled from "styled-components";
import { minWidth, maxWidth } from "styles/theme";

interface CardProps {
  marginMobile?: string;
  marginDesktop?: string;
}

export const Container = styled.div``;

export const BodyContainer = styled.div`
  margin-top: 20px;

  ${minWidth} {
    display: flex;
    justify-content: space-between;
    align-items: flex-center;
    gap: 20px;
  }
`;

export const BodyFlexContainer = styled.div`
  ${minWidth} {
    width: 70%;
  }
`;

export const BodyAside = styled.aside<CardProps>`
  overflow: auto;
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  margin-bottom: 40px;

  h3 {
    margin-bottom: 30px;
  }

  ${minWidth} {
    width: 30%;
    margin: ${props =>
      props.marginDesktop ? props.marginDesktop : "10px 0px"};
  }

  ${maxWidth} {
    margin: ${props => (props.marginMobile ? props.marginMobile : "20px 0px")};
  }
`;
export const TitleText = styled.h2`
  color: ${({ theme }) => theme.titleDark};
`;
