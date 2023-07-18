import { tablet, desktop } from "~/styles/theme";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${desktop} {
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;

    .contact-container {
      width: 30%;
    }
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  svg {
    fill: ${(props) => props.theme.colors.lightBlue};
    padding: 10px 0;
    margin-right: 10px;
    width: 30px;
    height: 30px;
  }

  h5 {
    margin: 0;
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
  }
`;

export const ContactWrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
