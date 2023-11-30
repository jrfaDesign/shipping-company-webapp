import React from "react";

import { Order } from "~/types/app";
import OrdersForThisWeek from "../OrdersForThisWeek";
import TotalNumberCard from "../TotalNumberCard";

import { Container } from "./styles";

interface Props {
  orders: Order[] | null;
  ordersForThisWeek: Order[] | null;
}

const View = ({ orders, ordersForThisWeek }: Props) => {
  return (
    <Container>
      <TotalNumberCard orders={orders} />
      <OrdersForThisWeek orders={ordersForThisWeek as any} />
    </Container>
  );
};

export default View;
