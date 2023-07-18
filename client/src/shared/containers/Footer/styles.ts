import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { desktop } from "styles/theme";

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  height: 33px;
`;

export const FooterText = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
