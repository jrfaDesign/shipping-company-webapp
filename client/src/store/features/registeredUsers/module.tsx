import { createSlice } from "@reduxjs/toolkit";
import { fetchRegisteredUserById, fetchRegisteredUsers } from "~/store/services/registeredUsers";
import { RegisteredUser } from "~/types/app";

interface registeredUsersProps {
  registeredUsers: RegisteredUser[];
  registeredUser: RegisteredUser | null;
  isLoading: boolean;
  isLoadingById: boolean;
}

const initialState: registeredUsersProps = {
  registeredUsers: [],
  registeredUser: null,
  isLoading: false,
  isLoadingById: false
};

const registeredUsersSlice = createSlice({
  name: "registeredUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // * fetchRegisteredUsers
    builder
      .addCase(fetchRegisteredUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRegisteredUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.registeredUsers = payload;
      })
      .addCase(fetchRegisteredUsers.rejected, (state) => {
        state.isLoading = false;
      });

    // * fetchRegisteredUserByIds
    builder
      .addCase(fetchRegisteredUserById.pending, (state) => {
        state.isLoadingById = true;
      })
      .addCase(fetchRegisteredUserById.fulfilled, (state, { payload }) => {
        state.isLoadingById = false;
      })
      .addCase(fetchRegisteredUserById.rejected, (state) => {
        state.isLoadingById = false;
      });
  }
});

export const {} = registeredUsersSlice.actions;

export default registeredUsersSlice.reducer;
