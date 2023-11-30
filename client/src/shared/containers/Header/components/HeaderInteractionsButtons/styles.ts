import styled from "styled-components";
import { laptop } from "~/styles/theme";

export const BlackSceen = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 200vh;

  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 98;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .react-datepicker-popper {
    ${laptop} {
      right: 150px;
    }
  }
`;
