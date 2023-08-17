import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useOrdersStore } from "~/hooks/stores/orders";

import Loading from "~/shared/components/Loading";

import View from "./components/View";

const OrdersDetails = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const order = useOrdersStore((state) => state.order);
  const getOrder = useOrdersStore((state) => state.fetchOrderById);
  const loadingOrder = useOrdersStore((state) => state.isLoadingById);

  useEffect(() => {
    getOrder(id);
  }, []);

  if (loadingOrder || !order) {
    return <Loading />;
  } else {
    return <View order={order} />;
  }
};

export default OrdersDetails;
