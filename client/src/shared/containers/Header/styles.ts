import { laptop, desktop } from "./../../../styles/theme";
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
