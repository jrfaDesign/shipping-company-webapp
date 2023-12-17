import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DatePickerProps {
  dateRange: [Date, Date];
  weekRange: [Date, Date];
  dateType: CalendarType;
  isVisible: boolean;
}

type CalendarType = "week" | "days";

const initialState: DatePickerProps = {
  dateRange: [
    new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), // Current date - 7 days
    new Date()
  ],
  weekRange: [
    new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), // Current date - 7 days
    new Date()
  ],
  dateType: "week",
  isVisible: true
};

const datePickerSlice = createSlice({
  name: "datePicker",
  initialState,
  reducers: {
    setDateRange: (state, action) => {
      state.dateRange = [action.payload.startDate, action.payload.endDate];
    },
    setWeekRange: (state, action) => {
      state.weekRange = [action.payload.startDate, action.payload.endDate];
    },
    changeCalendarType: (state, action: PayloadAction<CalendarType>) => {
      state.dateType = action.payload;
    },
    toggleDatePicker: (state) => {
      state.isVisible = !state.isVisible;
    }
  },
  extraReducers: (builder) => {}
});

export const { setDateRange, setWeekRange, changeCalendarType, toggleDatePicker } =
  datePickerSlice.actions;

export default datePickerSlice.reducer;
