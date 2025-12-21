import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "@/store/features/ModalSlice";

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
