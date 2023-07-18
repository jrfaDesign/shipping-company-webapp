import React from "react";

import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

const FullPageWhiteContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default FullPageWhiteContainer;
