import React from "react";

import { Order } from "~/types/app";
import OrdersForThisWeek from "../OrdersForThisWeek";
import PieChartData from "../PieChart";
import ShippersNewRequest from "../ShippersNewRequest";
import TotalNumberCard from "../TotalNumberCard";

import { Container, GridContainer } from "./styles";

interface Props {
  ordersForThisWeek: Order[] | null;
}

const View = ({ ordersForThisWeek }: Props) => {
  return (
    <Container>
      <GridContainer>
        <TotalNumberCard orders={ordersForThisWeek} />
        <PieChartData orders={ordersForThisWeek} className={"graph4"} />
        <OrdersForThisWeek orders={ordersForThisWeek} className={"graph5"} />
        <ShippersNewRequest orders={ordersForThisWeek} className={"graph6"} />
      </GridContainer>
    </Container>
  );
};

export default View;
