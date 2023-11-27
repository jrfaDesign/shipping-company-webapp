import create from "zustand";
import { useLocation } from "react-router-dom";

type DatePickerStore = {
  dateRange: [Date | null, Date | null];
  setDateRange: (startDate: Date | null, endDate: Date | null) => void;
};

const useDatePickerStore = create<DatePickerStore>((set) => ({
  dateRange: [
    new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000), // Current date - 7 days
    new Date()
  ],
  setDateRange: (startDate, endDate) => set({ dateRange: [startDate, endDate] })
}));

export default useDatePickerStore;
