import { create } from "zustand";
import { RegisteredUser } from "~/types/app";

import USERS from "./fakeUsers.json";

interface RegisteredUsersStore {
  registeredUsers: RegisteredUser[];
  isLoading: boolean;
  fetchRegisteredUsers: () => void;
}

export const useRegisteredUsersStore = create<RegisteredUsersStore>((set) => ({
  registeredUsers: [],
  isLoading: false,

  fetchRegisteredUsers: async () => {
    try {
      set({ registeredUsers: USERS });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  }
}));
