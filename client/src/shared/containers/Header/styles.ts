import { laptop } from "./../../../styles/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 80px;
  width:100%
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;

  ${laptop} {
    margin-left: 15px;
  }
`;

export const DrawerMobileContainer = styled.div`
height:100%
height:100vh
position:absolute
  background-color: rgba(200, 200, 200, 0.3);
`;
