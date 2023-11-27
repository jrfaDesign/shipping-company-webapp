import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from "date-fns/locale/pt";

import useDatePickerStore from "~/hooks/stores/datePicker";
import { useLocation, useNavigate } from "react-router-dom";

const CustomDatePicker = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dateRange = useDatePickerStore((state) => state.dateRange);
  const setDateRange = useDatePickerStore((state) => state.setDateRange);

  const [startDate, endDate] = dateRange;

  const handleDateChange = (update: any) => {
    const startDateISO = new Date(update[0]).toISOString();
    const endDateISO = new Date(update[1]).toISOString();
    setDateRange(update[0], update[1]);
    navigate(`${location.pathname}?startDate=${startDateISO}&endDate=${endDateISO}`);
  };

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      locale={pt}
      className="header-date-picker"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      maxDate={new Date()}
      onChange={(update: any) => handleDateChange(update)}
    />
  );
};

export default CustomDatePicker;
