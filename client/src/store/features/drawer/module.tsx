import { createSlice } from "@reduxjs/toolkit";

interface DrawerProps {
  isOpen: boolean;
}

const initialState: DrawerProps = {
  isOpen: false
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const { toggleDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
