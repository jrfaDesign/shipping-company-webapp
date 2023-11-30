import View from "./components/View";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { fetchOrders, fetchOrdersForThisWeek } from "~/store/services/orders";
import { changeCalendarType, toggleDatePicker } from "~/store/features/datePicker/module";

const HomeAdmin = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders.orders);
  const ordersForThisWeek = useAppSelector((state) => state.orders.ordersForThisWeek);

  const dateRange = useAppSelector((state) => state.datePicker.dateRange);
  const isDatePickerVisible = useAppSelector((state) => state.datePicker.isVisible);

  useEffect(() => {
    !isDatePickerVisible && dispatch(toggleDatePicker());
    dispatch(changeCalendarType("days"));
    if (!orders) {
      dispatch(fetchOrders());
    }
    if (!ordersForThisWeek) {
      dispatch(fetchOrdersForThisWeek());
    }
  }, [dateRange]);

  return <View orders={orders} ordersForThisWeek={ordersForThisWeek} />;
};

export default HomeAdmin;
