import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from "date-fns/locale/pt";

import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "~/store/hooks";

import { setDateRange, setWeekRange } from "~/store/features/datePicker/module";

import { DatePickerWrapperStyles, StyledDatePicker, Text } from "./styles";

const CustomDatePicker = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const dateRange = useAppSelector((state) => state.datePicker.dateRange);
  const weekRange = useAppSelector((state) => state.datePicker.weekRange);
  const dateType = useAppSelector((state) => state.datePicker.dateType);
  const isVisible = useAppSelector((state) => state.datePicker.isVisible);

  const [dateRangeStartDate, dateRangeEndDate] = dateRange;
  const [weekRangeStartDate, weekRangeEndDate] = weekRange;

  const handleDateChange = (update: Date[]) => {
    const startDateISO = new Date(update[0]).toISOString();
    const endDateISO = new Date(update[1]).toISOString();
    dispatch(setDateRange({ startDate: update[0], endDate: update[1] }));
    navigate(`${location.pathname}?startDate=${startDateISO}&endDate=${endDateISO}`);
  };

  const handleWeekPicker = (update: any) => {
    const inputDate = new Date(update);
    const dayOfWeek = inputDate.getDay();
    const difference = dayOfWeek - 1;
    const startOfWeek = new Date(inputDate);
    startOfWeek.setDate(inputDate.getDate() - difference);
    const endOfWeek = new Date(inputDate);
    endOfWeek.setDate(inputDate.getDate() + (6 - difference));
    dispatch(setWeekRange({ startDate: startOfWeek, endDate: endOfWeek }));
    navigate(`${location.pathname}?startDate=${startOfWeek}&endDate=${endOfWeek}`);
  };

  return (
    <>
      {isVisible && dateType === "days" && (
        <>
          <Text>Encomendas entre:</Text>
          <StyledDatePicker
            wrapperClassName="date-picker"
            dateFormat="dd/MM/yyyy"
            locale={pt}
            selectsRange={true}
            startDate={dateRangeStartDate}
            endDate={dateRangeEndDate}
            maxDate={new Date()}
            onChange={(update) => handleDateChange(update as Date[])}
          />
        </>
      )}
      {isVisible && dateType === "week" && (
        <>
          <Text>Encomendas entre:</Text>
          <StyledDatePicker
            locale={pt}
            dateFormat="dd/MM/yyyy"
            wrapperClassName="date-picker"
            startDate={weekRangeStartDate}
            endDate={weekRangeEndDate}
            maxDate={new Date()}
            onChange={(date) => handleWeekPicker(date)}
            selectsRange
          />
        </>
      )}
      <DatePickerWrapperStyles />
    </>
  );
};

export default CustomDatePicker;
