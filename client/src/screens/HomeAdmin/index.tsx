import View from "./components/View";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { fetchOrders } from "~/store/services/orders";

const HomeAdmin = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders.orders);
  const loadingOrders = useAppSelector((state) => state.orders.isLoading);

  const dateRange = useAppSelector((state) => state.datePicker.dateRange);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dateRange]);

  return <View loading={loadingOrders} orders={orders} />;
};

export default HomeAdmin;
