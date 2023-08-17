import { create } from "zustand";
import { statusToString } from "../globalHooks";

type ToastStore = {
  toast: ToastOptionProps;
  setToastOptions: (toast: ToastOptionProps, response?: any) => void;
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

  setToastOptions: (toast: ToastOptionProps, response: any) => {
    set({
      toast: {
        isVisible: response ? true : toast.isVisible,
        message: response ? response.data.message : toast.message,
        severity: statusToString(response ? response.status : (toast.severity as any))
      }
    });
  }
}));

export default useToastStore;
