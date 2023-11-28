import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisteredShipper } from "~/types/app";

import MOCK_SHIPPERS from "./fakeShippers.json";

export const fetchShippers = createAsyncThunk("shippers/fetchShippers", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    // const response = await axios.get(`${BASE_URL}/shippers`);
    return MOCK_SHIPPERS as RegisteredShipper[];
  } catch (error) {
    return [];
  }
});

export const fetchShipperById = createAsyncThunk("shipper/fetchShipperById", async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    return MOCK_SHIPPERS.find((shipper) => shipper._id === id) as RegisteredShipper;
  } catch (error) {
    return null;
  }
});
