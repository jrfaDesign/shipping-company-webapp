import { create } from "zustand";
import { RegistedShipper } from "~/types/app";

import SHIPPERS from "./fakeShippers.json";

interface RegisteredShippersStore {
  shippers: RegistedShipper[];
  isLoading: boolean;
  fetchRegisteredShippers: () => void;
}

export const useShippersStore = create<RegisteredShippersStore>((set) => ({
  shippers: [],
  isLoading: false,

  fetchRegisteredShippers: async () => {
    try {
      set({ shippers: SHIPPERS });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  }
}));
