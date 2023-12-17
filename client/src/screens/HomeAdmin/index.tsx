import View from "./components/View";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { fetchOrdersForThisWeek } from "~/store/services/orders";
import { changeCalendarType, toggleDatePicker } from "~/store/features/datePicker/module";

const HomeAdmin = () => {
  const dispatch = useAppDispatch();
  const ordersForThisWeek = useAppSelector((state) => state.orders.ordersForThisWeek);
  const weekRange = useAppSelector((state) => state.datePicker.weekRange);
  const isDatePickerVisible = useAppSelector((state) => state.datePicker.isVisible);

  useEffect(() => {
    !isDatePickerVisible && dispatch(toggleDatePicker());
    dispatch(changeCalendarType("week"));
    dispatch(fetchOrdersForThisWeek());
  }, [weekRange]);

  return <View ordersForThisWeek={ordersForThisWeek} />;
};

export default HomeAdmin;
