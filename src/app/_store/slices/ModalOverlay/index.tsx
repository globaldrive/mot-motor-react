"use client";

import { createSlice } from "@reduxjs/toolkit";

interface ModalPortalState {
  isModalOverlayOpen: boolean;
}

const initialState: ModalPortalState = {
  isModalOverlayOpen: false,
};

const modalOverlaySlice = createSlice({
  name: "modalOverlay",
  initialState,
  reducers: {
    toggleModalOverlay: state => {
      state.isModalOverlayOpen = state.isModalOverlayOpen =
        !state.isModalOverlayOpen;
    },
  },
});

export const { toggleModalOverlay } = modalOverlaySlice.actions;
export default modalOverlaySlice.reducer;
