import React, { useEffect } from "react";

import Loading from "~/shared/components/Loading";
import { changeCalendarType, toggleDatePicker } from "~/store/features/datePicker/module";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { fetchOrders } from "~/store/services/orders";

import View from "./components/View";

const MyOrders = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders.orders);
  const loadingOrders = useAppSelector((state) => state.orders.isLoading);

  const dateRange = useAppSelector((state) => state.datePicker.dateRange);
  const isDatePickerVisible = useAppSelector((state) => state.datePicker.isVisible);

  useEffect(() => {
    dispatch(changeCalendarType("week"));
    !isDatePickerVisible && dispatch(toggleDatePicker());
    dispatch(fetchOrders());
  }, [dateRange]);

  if (loadingOrders) {
    return <Loading height="70vh" />;
  } else {
    return <View orders={orders} />;
  }
};

export default MyOrders;
