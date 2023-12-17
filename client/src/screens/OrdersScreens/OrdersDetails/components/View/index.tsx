import React from "react";
import { Orders } from "~/types/app";

interface Props {
  order: Orders;
}

const View = ({ order }: Props) => {
  return (
    <div>
      <div>Order Details: {order._id}</div>
    </div>
  );
};

export default View;
