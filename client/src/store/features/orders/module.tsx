import { createSlice } from "@reduxjs/toolkit";
import { Order } from "~/types/app";
import { fetchOrderById, fetchOrders } from "~/store/services/orders";

interface OrdersProps {
  orders: Order[];
  order: Order | null;
  isLoading: boolean;
  isLoadingOrder: boolean;
}

const initialState: OrdersProps = {
  orders: [],
  order: null,
  isLoading: false,
  isLoadingOrder: false
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // * fetchOrders
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.orders = payload;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.isLoading = false;
      });

    // * fetchOrdersById
    builder
      .addCase(fetchOrderById.pending, (state) => {
        state.isLoadingOrder = true;
      })
      .addCase(fetchOrderById.fulfilled, (state, { payload }) => {
        state.isLoadingOrder = false;
        state.order = payload;
      })
      .addCase(fetchOrderById.rejected, (state) => {
        state.isLoadingOrder = false;
      });
  }
});

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
