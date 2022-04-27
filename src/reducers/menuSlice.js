import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

export const menuSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    onOpenMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onOpenMenu } = menuSlice.actions;
export const menusState = (state) => state.menu;

export default menuSlice.reducer;
