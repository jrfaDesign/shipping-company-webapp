import { create } from "zustand";
import { Orders } from "~/types/app";

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
    try {
      set({ orders: ORDERS as Orders[] });
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
