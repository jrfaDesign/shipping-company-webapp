import { create } from "zustand";
import { axios } from "~/config/interceptors";
import { BASE_URL } from "~/config/variables";
import { Orders } from "~/types/app";

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

    // const startDateISO = new Date(startDate as any).toISOString();
    // const endDateISO = new Date(endDate as any).toISOString();

    const filteredORDERS = ORDERS.filter((item) => {
      const requestedDate = new Date(item.requestedDate);
      if (startDate && endDate) {
        return requestedDate >= startDate && requestedDate <= endDate;
      }
    });

    try {
      /* const response = await axios.get(
        `${BASE_URL}orders?startDate=${startDateISO}&endDate=${endDateISO}`
      );
      set({ orders: response.data as Orders[] }); */
      set({ orders: filteredORDERS as Orders[] });
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
