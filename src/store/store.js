import { configureStore } from "@reduxjs/toolkit";
import cartReducre from "../slice/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducre,
  },
});

export default store;
