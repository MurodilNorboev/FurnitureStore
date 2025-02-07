import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartsSlice";
import userReducer from "./userSlice";
import likeReducer from './Like.Tests/slice'

const store = configureStore({
  reducer: {
    carts: cartReducer, 
    cart: cartReducer, 
    user: userReducer,
    likes: likeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;