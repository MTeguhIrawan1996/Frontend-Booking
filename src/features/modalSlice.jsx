import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: {
    idModal: localStorage.getItem("idModal") || null,
    openModal: false,
  },
  reducers: {
    updateModal: (state) => {
      state.openModal = !state.openModal;
    },
    updateIdModal: (state, action) => {
      state.idModal = action.payload.idModal;
    },
  },
});

export const { updateModal, updateIdModal } = modal.actions;
export default modal.reducer;
