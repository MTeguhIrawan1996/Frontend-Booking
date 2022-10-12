import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
