import styled from "styled-components";
import { desktop } from "~/styles/theme";

export const MainContainer = styled.div`
  width: 95%;
  height: 100%;
`;

export const InformationContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${desktop} {
    flex-direction: row;
  }
`;

export const LabelTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LabelTextColors {
  color: any;
}

export const LabelText = styled.div<LabelTextColors>`
  width: 120px;
  font-size: 12px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  ::marker {
    color: ${(props) => props.color};
    font-size: 30px;
    postition: abosolute;
  }
  > div {
    margin-right: 5px;
    height: 10px;
    width: 10px;
    border-radius: 20px;
    background: ${(props) => props.color};
  }
`;
