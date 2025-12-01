import cartReducer from "@/state/global/slices/cartSlice";
import menuSlice from "@/state/global/slices/menuSlice";
import userReducer from "@/state/global/slices/userSlice.jsx";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
