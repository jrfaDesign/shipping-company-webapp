import React, { Children } from "react";

import { SectionWrapper } from "./styles";

interface Props {
  children: any;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
  accent?: boolean;
}

const Section = ({ children, justify, direction, accent }: Props) => {
  return (
    <SectionWrapper
      className="image-slider"
      direction={direction}
      justify={justify}
      accent={accent}
    >
      {children}
    </SectionWrapper>
  );
};

export default Section;
