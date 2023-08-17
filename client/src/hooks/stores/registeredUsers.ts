import { create } from "zustand";
import { RegisteredUser } from "~/types/app";

import USERS from "./fakeUsers.json";

interface RegisteredUsersStore {
  registeredUsers: RegisteredUser[];
  registeredUser: RegisteredUser | null;
  isLoading: boolean;
  isLoadingById: boolean;
  fetchRegisteredUsers: () => void;
  fetchRegisteredUserById: (id: string) => void;
}

export const useRegisteredUsersStore = create<RegisteredUsersStore>((set) => ({
  registeredUsers: [],
  registeredUser: null,

  isLoading: false,
  isLoadingById: false,

  fetchRegisteredUsers: async () => {
    try {
      set({ registeredUsers: USERS });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchRegisteredUserById: async (id) => {
    try {
      set({ registeredUser: USERS.find((user) => user._id === id) as RegisteredUser });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  }
}));
