import { desktop } from "~/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100px;
    object-fit: contain;
  }

  ${desktop} {
    height: 90px;
  }
`;

export const LogoText = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.darkBlue};
`;
