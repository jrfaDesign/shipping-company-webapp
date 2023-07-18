import { desktop } from "~/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 40px;
  }
`;

export const FormContainer = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;

  ${desktop} {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
