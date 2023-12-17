import styled from "styled-components";
import { laptop } from "~/styles/theme";

export const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${laptop} {
    flex-direction: row;
  }
`;

export const ButtonContainer = styled.div`
  width: 250px !important;
  margin-bottom: 20px;
`;
