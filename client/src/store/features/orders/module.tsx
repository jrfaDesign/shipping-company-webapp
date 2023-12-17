import { createSlice } from "@reduxjs/toolkit";
import { Order } from "~/types/app";
import { fetchOrderById, fetchOrders, fetchOrdersForThisWeek } from "~/store/services/orders";

interface OrdersProps {
  orders: Order[] | null;
  order: Order | null;
  ordersForThisWeek: Order[] | null;
  isLoading: boolean;
  isLoadingOrder: boolean;
  isLoadingOrderForThisWeek: boolean;
}

const initialState: OrdersProps = {
  orders: null,
  ordersForThisWeek: null,
  order: null,
  isLoading: false,
  isLoadingOrder: false,
  isLoadingOrderForThisWeek: false
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
    // * fetchOrdersForThisWeek
    builder
      .addCase(fetchOrdersForThisWeek.pending, (state) => {
        state.isLoadingOrderForThisWeek = true;
      })
      .addCase(fetchOrdersForThisWeek.fulfilled, (state, { payload }) => {
        state.ordersForThisWeek = payload;
        state.isLoadingOrderForThisWeek = false;
      })
      .addCase(fetchOrdersForThisWeek.rejected, (state) => {
        state.isLoadingOrderForThisWeek = false;
      });
  }
});

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
