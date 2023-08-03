import React, { useEffect } from "react";

import { useOrdersStore } from "~/hooks/stores/orders";

import Loading from "~/shared/components/Loading";

import View from "./components/View";

const MyOrders = () => {
  const orders = useOrdersStore((state) => state.orders);
  const getOrders = useOrdersStore((state) => state.fetchOrders);
  const loadingOrders = useOrdersStore((state) => state.isLoading);

  useEffect(() => {
    getOrders();
  }, []);

  if (loadingOrders) {
    return <Loading />;
  } else {
    return <View orders={orders} />;
  }
};

export default MyOrders;
