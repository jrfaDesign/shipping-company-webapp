import styled from "styled-components";
import { tablet, laptop } from "styles/theme";

export const AppContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
`;

export const Container = styled.div`
  ${tablet} {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
