import { createSlice } from "@reduxjs/toolkit";
import { Toaster } from "sonner";

const defaultState = {
  cartItems: [],
  numItemInCart: 0,
  cartTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      console.log(product);

      const item = state.cartItems.find((i) => i.carID === product.cartId);
      console.log(item);

      if (item) {
        item.amount = +product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemInCart += Number(product.amount);
    },
    clearItem: (state) => {
      console.log(state);
    },
    removeItem: (state, action) => {
      console.log(state, action);
    },
    editItem: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { addItem, clearItem, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
