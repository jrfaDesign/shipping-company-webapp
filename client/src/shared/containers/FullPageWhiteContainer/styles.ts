import styled from "styled-components";
import { desktop, laptop, maxLaptop } from "~/styles/theme";

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
  overflow: auto;

  .no-data {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.superLightBlue};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 18px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface ChildrenContainerProps {
  padding?: boolean;
}

export const ChildrenContainer = styled.div<ChildrenContainerProps>`
  padding: ${(props) => (props.padding ? "30px 20px" : 0)};
  height: 100%;
`;

