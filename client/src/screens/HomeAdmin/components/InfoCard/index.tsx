import React from "react";

import { Wrapper, Container, IconContainer, Label, Amount } from "./styles";

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
      <Label>{label}: </Label>
      <Container>
        <IconContainer color={color}>{icon}</IconContainer>
        <Amount>{amount}</Amount>
      </Container>
    </Wrapper>
  );
};

export default InfoCard;
