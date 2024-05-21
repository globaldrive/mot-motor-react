"use client";

import { configureStore } from "@reduxjs/toolkit";

import BurgerMenuReducer from "./slices/BurgerMenu";
import ModalOverlayReducer from "./slices/ModalOverlay";
import UserDetailsReducer from "./slices/UserDetails";

export const store = configureStore({
  reducer: {
    userDetails: UserDetailsReducer,
    modalOverlay: ModalOverlayReducer,
    burgerMenu: BurgerMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
