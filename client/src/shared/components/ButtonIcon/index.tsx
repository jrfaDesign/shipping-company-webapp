import React from "react";

import { Button } from "./styles";

interface Props {
  margin?: string;
  children: React.ReactNode;
}

const ButtonIcon = ({ margin, children }: Props) => {
  return <Button margin={margin}>{children}</Button>;
};

export default ButtonIcon;
