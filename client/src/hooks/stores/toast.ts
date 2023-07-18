import { create } from "zustand";
import { statusToString } from "../globalHooks";

type ToastStore = {
  toast: ToastOptionProps;
  setToastOptions: (toast: ToastOptionProps) => void;
};

type ToastOptionProps = {
  isVisible: boolean;
  message: string;
  severity: "info" | "error" | "warning" | "success" | any;
};

const useToastStore = create<ToastStore>((set) => ({
  toast: {
    isVisible: false,
    message: "",
    severity: "info"
  },

  setToastOptions: (toast: ToastOptionProps) => {
    set({
      toast: {
        isVisible: toast.isVisible,
        message: toast.message,
        severity: statusToString(toast.severity as any)
      }
    });
  }
}));

export default useToastStore;
