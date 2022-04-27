import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  count: null,
  plugins: [],
  disabledAll: null,
};

export const pluginsSlice = createSlice({
  name: "plugins",
  initialState,
  reducers: {
    onSetPlugins: (state, action) => {
      state.loading = false;
      state.plugins = action.payload.plugins;
      state.count = action.payload.count;
    },
    onDisabled: (state) => {
      state.disabledAll = true;
    },
    onEnabled: (state) => {
      state.disabledAll = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetPlugins, onDisabled, onEnabled } = pluginsSlice.actions;
export const pluginsState = (state) => state.plugins;

export default pluginsSlice.reducer;
