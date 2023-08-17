import styled from "styled-components";
import { laptop } from "~/styles/theme";

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.superLightBlue};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 18px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;
