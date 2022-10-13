import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
  name: "login",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.user = null;
      state.loading = !state.loading;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload.error;
    },
    logout: (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = login.actions;
export default login.reducer;
