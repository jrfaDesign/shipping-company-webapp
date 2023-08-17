import styled from "styled-components";
import { laptop, maxLaptop } from "~/styles/theme";

interface ContainerProps {
  margin?: string;
}

export const Container = styled.div<ContainerProps>`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .no-data {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.superLightBlue};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 18px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${laptop} {
    flex-direction: row;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitleText = styled.div`
  color: #6b6e7f;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ButtonContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  max-width: 25px;

  background-color: ${(props) => props.theme.colors.white};
  padding: 10px;
  svg {
    fill: ${(props) => props.theme.colors.lightBlue};
  }

  :hover {
    transition: all 0.2s ease;
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    background-color: ${({ theme }) => theme.colors.lightBlue};

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

interface ChildrenContainerProps {
  padding?: boolean;
}

export const ChildrenContainer = styled.div<ChildrenContainerProps>`
  padding: ${(props) => (props.padding ? "10px 20px" : 0)};
`;
