import { create } from "zustand";

interface DrawerStore {
  drawerIsOpen: boolean;
  toggleDrawer: () => void;
}

const useDrawerStore = create<DrawerStore>((set) => ({
  drawerIsOpen: true,
  toggleDrawer: () => set((state) => ({ drawerIsOpen: !state.drawerIsOpen }))
}));

export default useDrawerStore;
