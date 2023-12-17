import { createSlice } from "@reduxjs/toolkit";

import { User as UserProps } from "~/types/app";

interface AuthProps {
  user: UserProps | null;
  organisation?: "internal" | "external";
  userType?: "admin" | "client" | "worker";
  accessToken: string;
  loadingUser: boolean;
}

const initialState: AuthProps = {
  user: null,
  accessToken: "",
  loadingUser: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.accessToken = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      Object.assign(state, initialState);
    }
  },

  extraReducers: (builder) => {}
});

export const { setUser, setAccessToken, logout } = authSlice.actions;

export default authSlice.reducer;
