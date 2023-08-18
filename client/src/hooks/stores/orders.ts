import { create } from "zustand";
import { axios } from "~/config/interceptors";
import { BASE_URL } from "~/config/variables";
import { Orders } from "~/types/app";
import { formatDateToISOString } from "../globalHooks";
import useDatePickerStore from "./datePicker";

import ORDERS from "./fakeOrders.json";

interface OrdersSore {
  orders: Orders[];
  order: Orders | null;
  isLoading: boolean;
  isLoadingById: boolean;
  fetchOrders: () => void;
  fetchOrderById: (id: string) => void;
}

export const useOrdersStore = create<OrdersSore>((set) => ({
  orders: [],
  order: null,
  isLoading: false,
  isLoadingById: false,

  fetchOrders: async () => {
    const date = useDatePickerStore.getState().dateRange;
    const [startDate, endDate] = date;

    try {
      const response = await axios.get(
        `${BASE_URL}orders?startDate=${formatDateToISOString(
          startDate as Date
        )}&endDate=${formatDateToISOString(endDate as Date)}`
      );
      console.log(response);
      set({ orders: response.data as Orders[] });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchOrderById: async (id: string) => {
    try {
      set({ order: ORDERS.find((order) => order._id === id) as Orders });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  }
}));
