import React from "react";

import { Orders } from "~/types/app";

import WeeklyOrdersStatusGraph from "../WeeklyOrdersStatusGraph";
import { Container } from "./styles";

interface Props {
  orders: Orders[];
  loadingData: boolean;
}

const View = ({ orders, loadingData }: Props) => {
  return (
    <Container>
      <WeeklyOrdersStatusGraph orders={orders} />
    </Container>
  );
};

export default View;
