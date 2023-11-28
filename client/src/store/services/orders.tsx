import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store"; // Make sure RootState is correctly defined

import { Order } from "~/types/app";

import MOCK_ORDERS from "./fakeOrders.json";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async (_, { getState }) => {
  const state = getState() as RootState;
  const dateRange = state.datePicker.dateRange;
  const [startDate, endDate] = dateRange;

  const filteredOrders = MOCK_ORDERS.filter((order) => {
    const requestedDate = new Date(order.requestedDate);
    if (startDate && endDate) {
      return requestedDate >= startDate && requestedDate <= endDate;
    }
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    // const response = await axios.get(`${BASE_URL}/orders`);
    return filteredOrders as Order[];
  } catch (error) {
    return [];
  }
});

export const fetchOrderById = createAsyncThunk("orders/fetchOrdersById", async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    // const response = await axios.get(`${BASE_URL}/orders/${id}`);
    return MOCK_ORDERS.find((order) => order._id === id) as Order;
  } catch (error) {
    return null;
  }
});
