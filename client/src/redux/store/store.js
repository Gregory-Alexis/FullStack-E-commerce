import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productSlice from "../features/productSlice";
import shopReducer from "../features/shopSlice";

export const store = configureStore({
  reducer: {
    shopSlice: shopReducer,
    cartSlice: cartReducer,
    productSlice: productSlice,
  },
});
