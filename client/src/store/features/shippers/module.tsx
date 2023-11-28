import { createSlice } from "@reduxjs/toolkit";

import { fetchShipperById, fetchShippers } from "~/store/services/shippers";
import { RegisteredShipper } from "~/types/app";

interface ShippersProps {
  shippers: RegisteredShipper[];
  shipper: RegisteredShipper | null;
  isLoading: boolean;
  isLoadingById: boolean;
}

const initialState: ShippersProps = {
  shippers: [],
  shipper: null,
  isLoading: false,
  isLoadingById: false
};

const shippersSlice = createSlice({
  name: "shippers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShippers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchShippers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.shippers = payload;
      })
      .addCase(fetchShippers.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(fetchShipperById.pending, (state) => {
        state.isLoadingById = true;
      })
      .addCase(fetchShipperById.fulfilled, (state, { payload }) => {
        state.isLoadingById = false;
        state.shipper = payload;
      })
      .addCase(fetchShipperById.rejected, (state) => {
        state.isLoadingById = false;
      });
  }
});

export const {} = shippersSlice.actions;

export default shippersSlice.reducer;
