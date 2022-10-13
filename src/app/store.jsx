import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/loginSlice";
import searchSlice from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
