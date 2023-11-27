import React from "react";

import { Orders } from "~/types/app";
import TotalNumberCard from "../TotalNumberCard";

import WeeklyOrdersStatusGraph from "../WeeklyOrdersStatusGraph";
import { Container } from "./styles";

interface Props {
  orders: Orders[];
  loading: boolean;
}

const View = ({ orders, loading }: Props) => {
  console.log(orders);
  return (
    <Container>
      <TotalNumberCard orders={orders} loading={loading} />
      <WeeklyOrdersStatusGraph orders={orders} loading={loading} />
    </Container>
  );
};

export default View;
