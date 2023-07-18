import { desktop } from "~/styles/theme";
import styled from "styled-components";

export const StyledInput = styled.input`
  display: block;
  font-size: 12px;
  font-weight: 500;
  background-color: #fbfafa;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue} !important;
  border-radius: 8px !important;
  padding: 14px 8px;
  width: inherit;

  color: ${({ theme }) => theme.colors.darkBlue};

  ${desktop} {
    border-radius: 0px;
    background-color: #fbfafa;

    padding: 14px 0px;
  }

  :focus {
    outline: none;
  }
`;
