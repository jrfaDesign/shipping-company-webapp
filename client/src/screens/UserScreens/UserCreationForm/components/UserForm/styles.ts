import styled from "styled-components";
import { desktop, laptop, mobile } from "~/styles/theme";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  gap: 15px;
  ${desktop} {
    width: 200px;
    align-self: flex-end;
  }

  ${mobile} {
    padding-bottom: 10px;
  }
`;

export const MultiInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
