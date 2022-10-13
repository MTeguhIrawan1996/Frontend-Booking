import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
  name: "search",
  initialState: {
    destination: localStorage.getItem("destination") || "",
    date: [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ],
    options: JSON.parse(localStorage.getItem("options")) || null,
  },
  reducers: {
    update: (state, action) => {
      state.destination = action.payload.destination;
      state.date = action.payload.date;
      state.options = action.payload.options;
    },
    updateDate: (state, action) => {
      state.date = action.payload.date;
    },
  },
});

export const { updateDate, update } = search.actions;
export default search.reducer;
