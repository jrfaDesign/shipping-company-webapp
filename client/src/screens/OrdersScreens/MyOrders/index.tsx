import React, { useEffect } from "react";
import useDatePickerStore from "~/hooks/stores/datePicker";

import { useOrdersStore } from "~/hooks/stores/orders";

import Loading from "~/shared/components/Loading";

import View from "./components/View";

const MyOrders = () => {
  const orders = useOrdersStore((state) => state.orders);
  const getOrders = useOrdersStore((state) => state.fetchOrders);
  const loadingOrders = useOrdersStore((state) => state.isLoading);

  const dateRange = useDatePickerStore((state) => state.dateRange);

  useEffect(() => {
    getOrders();
  }, [dateRange]);

  if (loadingOrders) {
    return <Loading />;
  } else {
    return <View orders={orders} />;
  }
};

export default MyOrders;
