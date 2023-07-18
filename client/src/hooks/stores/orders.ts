import { create } from "zustand";
import { Orders } from "~/types/app";

import ORDERS from "./fakeOrders.json";

interface OrdersSore {
  orders: Orders[];
  isLoading: boolean;
  fetchOrders: () => void;
}

export const useOrdersStore = create<OrdersSore>((set) => ({
  orders: [],
  isLoading: false,

  fetchOrders: async () => {
    try {
      set({ orders: ORDERS });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  }
}));
