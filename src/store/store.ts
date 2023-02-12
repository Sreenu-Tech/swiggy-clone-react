import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./addtocart.slice";

export const store = configureStore({
    reducer: {
        cart: addToCartSlice.reducer
    }
})