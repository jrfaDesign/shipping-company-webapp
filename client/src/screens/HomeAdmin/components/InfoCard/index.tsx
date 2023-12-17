import React from "react";

import { Wrapper, IconContainer, Label, Amount } from "./styles";

interface Props {
  data: {
    label: string;
    amount: number;
    icon: any;
    color: string;
  };
}

const InfoCard = ({ data }: Props) => {
  const { label, amount, icon, color } = data;
  return (
    <Wrapper>
      <IconContainer color={color}>{icon}</IconContainer>
      <Label>{label}: </Label>
      <Amount>{amount}</Amount>
    </Wrapper>
  );
};

export default InfoCard;
