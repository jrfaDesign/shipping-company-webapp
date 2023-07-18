import styled from "styled-components";
import { mobile, tablet, laptop, desktop, maxDesktop } from "styles/theme";

import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  height: 80px;
  margin-left: 15px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${maxDesktop} {
    .drop-menu {
      position: fixed;
      top: 30px;
      right: 30px;
    }
  }
`;
