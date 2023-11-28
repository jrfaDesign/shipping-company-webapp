import React, { useEffect } from "react";

import Loading from "~/shared/components/Loading";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { fetchOrders } from "~/store/services/orders";

import View from "./components/View";

const AdminOrders = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders.orders);
  const loadingOrders = useAppSelector((state) => state.orders.isLoading);

  const dateRange = useAppSelector((state) => state.datePicker.dateRange);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dateRange]);

  if (loadingOrders) {
    return <Loading />;
  } else {
    return <View orders={orders} />;
  }
};

export default AdminOrders;
