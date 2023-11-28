import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisteredUser } from "~/types/app";

import MOCK_USERS from "./fakeUsers.json";

export const fetchRegisteredUsers = createAsyncThunk(
  "registeredUsers/fetchRegisteredUsers",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      // const response = await axios.get(`${BASE_URL}/users`);
      return MOCK_USERS as RegisteredUser[];
    } catch (error) {
      return [];
    }
  }
);

export const fetchRegisteredUserById = createAsyncThunk(
  "registeredUsers/fetchRegisteredUserById",
  async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      // const response = await axios.get(`${BASE_URL}/users`);
      return MOCK_USERS.find((user) => user._id === id) as RegisteredUser;
    } catch (error) {
      return null;
    }
  }
);
