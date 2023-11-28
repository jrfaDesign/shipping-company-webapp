import { createSlice } from "@reduxjs/toolkit";

interface DatePickerProps {
  dateRange: [Date, Date];
}

const initialState: DatePickerProps = {
  dateRange: [
    new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), // Current date - 7 days
    new Date()
  ]
};

const datePickerSlice = createSlice({
  name: "datePicker",
  initialState,
  reducers: {
    setDateRange: (state, action) => {
      state.dateRange = [action.payload.startDate, action.payload.endDate];
    }
  },
  extraReducers: (builder) => {}
});

export const { setDateRange } = datePickerSlice.actions;

export default datePickerSlice.reducer;
