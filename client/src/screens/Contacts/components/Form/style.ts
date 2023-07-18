import { desktop } from "~/styles/theme";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export const FormTitle = styled.h4`
  margin-bottom: 20px;
`;

export const InlineInputContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  ${desktop} {
    flex-direction: row;
  }
`;
