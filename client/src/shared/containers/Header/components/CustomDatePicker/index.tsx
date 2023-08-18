import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from "date-fns/locale/pt";

import useDatePickerStore from "~/hooks/stores/datePicker";

const CustomDatePicker = () => {
  const dateRange = useDatePickerStore((state) => state.dateRange);
  const setDateRange = useDatePickerStore((state) => state.setDateRange);

  const [startDate, endDate] = dateRange;

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      locale={pt}
      className="header-date-picker"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      maxDate={new Date()}
      onChange={(update: any) => {
        setDateRange(update[0], update[1]);
      }}
    />
  );
};

export default CustomDatePicker;
