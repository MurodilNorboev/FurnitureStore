import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartsSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    carts: cartReducer, 
    cart: cartReducer, 
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

