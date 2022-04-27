import { configureStore } from "@reduxjs/toolkit";

import routesSlice from "../reducers/routesSlice";
import pluginsSlice from "../reducers/pluginsSlice";

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    routes: routesSlice,
    plugins: pluginsSlice,
  },
});
