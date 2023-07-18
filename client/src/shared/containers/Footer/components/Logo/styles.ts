import styled from "styled-components";
import { desktop } from "~/styles/theme";

export const LogoContainer = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;

  h2 {
    margin-bottom: 20px;
    border: 2px solid;
  }

  ${desktop} {
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${desktop} {
    align-items: flex-start;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  margin-bottom: 5px;
  margin-left: 5px;

  span {
    font-size: 14px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 5px;

  div {
    cursor: pointer;
  }
`;
