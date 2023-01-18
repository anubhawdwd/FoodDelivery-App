import { createSlice } from "@reduxjs/toolkit";
// import { store } from "./Store";

export const cartSlice = createSlice({
  name: "ZomatoCart",
  initialState: {
    cartItem: [],
    restaurantName: "",
  },
  reducers: {
    AddToCart: (state, action) => {
      return {
        ...state,
        cartItem: [...state.cartItem, { ...action.payload, quantity: 1 }],
        restaurantName: action.payload.restaurantName,
      };
    },
    RemoveFromCart: (state, action) => {
      return {
        ...state,
        cartItem: state.cartItem.filter((c) => c.id !== action.payload.id),
      };
    },
    ClearCart: (state, action) => {
      console.log("clearAll");
      setTimeout(() => {
        console.log("2000ms");
      }, 2000);
        return {
          cartItem: [],
          restaurantName: "",
        }
    },
  },
});
export const { AddToCart, RemoveFromCart, ClearCart } = cartSlice.actions;
export default cartSlice.reducer;
