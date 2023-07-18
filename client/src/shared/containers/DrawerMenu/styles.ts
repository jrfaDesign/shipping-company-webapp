import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { desktop } from "~/styles/theme";

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.open ? "279px" : "20px")};
  padding: ${(props) => (props.open ? "0px" : "20px 15px")};
  transition: all 0.2s ease;
`;

export const DrawerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  padding: 20px;

  svg {
    border-radius: 20px;
    transition: all 0.2s;
    :hover {
      background-color: ${({ theme }) => theme.colors.grey02};
    }
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  .active,
  .notActive {
    padding: 43px 16px;
    font-weight: bold;
    display: none;
    ${desktop} {
      display: inline;
    }
  }

  .active {
    color: ${({ theme }) => theme.textDark};
    transition: color 0.3s;
  }
  .notActive {
    color: ${({ theme }) => theme.text};
  }
`;

export const DrawerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
