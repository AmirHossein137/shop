import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const modalId = action.payload?.modalId;
      if (modalId) {
        state[modalId] = { openModal: true };
      }
    },
    closeModal: (state, action) => {
      const modalId = action.payload?.modalId;
      if (modalId) {
        state[modalId] = { openModal: false };
      }
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
