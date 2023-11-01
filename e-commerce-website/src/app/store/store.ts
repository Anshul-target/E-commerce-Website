import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "@/app/features/product-list/productSlice";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    productReducer: fetchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
