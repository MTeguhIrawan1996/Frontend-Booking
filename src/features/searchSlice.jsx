import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
  name: "search",
  initialState: {
    destination: "",
    date: [],
    options: {
      adult: 0,
      children: 0,
      room: 0,
    },
    status: false,
  },
  reducers: {
    update: (state, action) => {
      state.destination = action.payload.destination;
      state.date = action.payload.date;
      state.options = action.payload.options;
      state.status = action.payload.status;
    },
  },
});

export const { update } = search.actions;
export default search.reducer;
