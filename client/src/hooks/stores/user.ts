import { create } from "zustand";
import { User } from "~/types/app";

interface UserStore {
  user: User | null;

  logout: () => void;
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  setUser: (userData: User) => void;
}

const userFromLocalStorage = localStorage.getItem("user");
const accessTokenFromLocalStorage = localStorage.getItem("token");

export const useUserStore = create<UserStore>((set) => ({
  user: userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null,
  accessToken: accessTokenFromLocalStorage || null,

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    set({ user: null });
  },

  setAccessToken: (token: string) => {
    localStorage.setItem("token", token);
    set({ accessToken: token });
  },

  setUser: (userData: User) => {
    set({ user: userData });
  }
}));
