import { create } from "zustand";

interface LoginStore {
  isLogedIn: boolean;
  setIsLogedIn: () => void;
}

export const loginStore = create<LoginStore>((set) => ({
  isLogedIn: true,
  setIsLogedIn: () => set((state) => ({ isLogedIn: !state.isLogedIn }))
}));
