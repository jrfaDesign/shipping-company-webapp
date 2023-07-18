import styled from "styled-components";

import { tablet, desktop, desktopLarge } from "~/styles/theme";

interface SectionPops {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
  accent?: boolean;
}

export const SectionWrapper = styled.section<SectionPops>`
  border: ${(props) => (props.accent ? `1px solid ${props.theme.colors.darkBlue}` : "none")};
  background-color: ${(props) => (props.accent ? `${props.theme.colors.lightGrey}` : "none")};
  box-shadow: ${(props) => (props.accent ? `0px 5px 15px rgba(0, 0, 0, 0.1)` : "none")};
  padding: 24px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 0px;

  ${tablet} {
    gap: 60px;
    padding: 40px 60px;
    flex-wrap: wrap;
  }

  ${desktop} {
    gap: 60px;
    padding: 50px 150px;
    align-items: center;
    justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
    flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  }

  ${desktopLarge} {
    gap: 60px;
    padding: 50px 200px;
    align-items: center;

    flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  }
`;
