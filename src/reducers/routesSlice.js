import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  tabs: [],
  tabdata: [],
  countDisbaled: null,
};

export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    onSetTabs: (state, action) => {
      state.tabs = action.payload;
    },
    onSetTabdata: (state, action) => {
      state.tabdata = action.payload.tabdata;
      state.countDisbaled = action.payload.countDisbaled;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetTabs, onSetTabdata } = routesSlice.actions;
export const routesState = (state) => state.routes;

export default routesSlice.reducer;
