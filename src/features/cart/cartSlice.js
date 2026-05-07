import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const defaultState = {
  cartItems: [],
  numItemInCart: 0,
  cartTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: 0,
};
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      console.log(product);

      const item = state.cartItems.find((i) => i.carID === product.cartID);
      console.log(item);

      if (item) {
        item.amount = +product.amount;
      } else {
        state.cartItems.push(product);
      }

      cartSlice.caseReducers.calculateTotals(state);
      state.numItemInCart += Number(product.amount);
      state.cartTotal += product.price * product.amount;
      state.tax = 0.1 * state.cartTotal;
      toast.success("Item added to cart");
      localStorage.setItem("cart", JSON.stringify(state));
      // state.orderTotal = state.cartTotal + state.tax + state.shipping;
    },
    clearItem: () => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

      cartSlice.caseReducers.calculateTotals(state);
      state.numItemInCart += Number(product.amount);
      state.cartTotal += product.price * product.amount;
      state.tax = 0.1 * state.cartTotal;
      toast.success("Item remover from cart");
    },
    editItem: (state, action) => {
      const {amount, carID} = action.payload
      const item = state.cartItems.find((i)=> i.carID === carID)
      state.cartItems += amount - item.amount
      state.cartTotal += item.price * (amount - item.amount)
      cartSlice.caseReducers.calculateTotals(state)
      toast.success("cart update") 
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearItem, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
