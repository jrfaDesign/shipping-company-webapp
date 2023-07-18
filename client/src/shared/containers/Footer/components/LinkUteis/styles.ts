import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { desktop } from "~/styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 2px solid white;
  border-bottom: 2px solid white;

  padding: 20px 0;

  h6 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  ${desktop} {
    border-top: 0px solid white;
    border-bottom: 0px solid white;
    padding: 0;

    h6 {
      text-align: left;
    }
  }
`;

export const NavMenu = styled.nav`
  a {
    display: block;
    font-size: 14px;
    margin-bottom: 15px;
    color: white;
    text-decoration: none;

    ${desktop} {
      text-align: left;
      margin: 5px 0;
    }
  }

  ${desktop} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0px;
  }
`;

export const Link = styled(NavLink)``;
