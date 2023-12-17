import { createSlice } from "@reduxjs/toolkit";
import { statusToString } from "~/hooks/globalHooks";

interface toastProps {
  toast: ToastOptionProps;
}

interface ToastOptionProps {
  isVisible: boolean;
  message: string;
  severity: "info" | "error" | "warning" | "success" | any;
}

const initialState: toastProps = {
  toast: {
    isVisible: false,
    message: "",
    severity: "info"
  }
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      if (action.payload !== false) {
        state.toast = {
          isVisible: action.payload.isVisible ?? true,
          message: action.payload.data.message,
          severity: statusToString(action.payload.status)
        };
      } else if (action.payload === false) {
        state.toast = {
          isVisible: false,
          message: "",
          severity: "info"
        };
      }
    }
  },
  extraReducers: (builder) => {}
});

export const { showToast } = toastSlice.actions;

export default toastSlice.reducer;
