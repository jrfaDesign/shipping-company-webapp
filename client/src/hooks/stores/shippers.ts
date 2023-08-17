import { create } from "zustand";
import { RegistedShipper } from "~/types/app";

import SHIPPERS from "./fakeShippers.json";

interface RegisteredShippersStore {
  shippers: RegistedShipper[];
  shipper: RegistedShipper | null;
  isLoading: boolean;
  isLoadingById: boolean;
  fetchRegisteredShippers: () => void;
  fetchRegisteredShipperById: (id: string) => void;
}

export const useShippersStore = create<RegisteredShippersStore>((set) => ({
  shippers: [],
  shipper: null,
  isLoading: false,
  isLoadingById: false,

  fetchRegisteredShippers: async () => {
    try {
      set({ shippers: SHIPPERS });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  },
  fetchRegisteredShipperById: async (id) => {
    try {
      set({ shipper: SHIPPERS.find((shipper) => shipper._id === id) as RegistedShipper });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  }
}));
