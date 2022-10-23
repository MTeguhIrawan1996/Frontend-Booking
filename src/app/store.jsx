import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/loginSlice";
import modalSlice from "../features/modalSlice";
import searchSlice from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    login: loginSlice,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
