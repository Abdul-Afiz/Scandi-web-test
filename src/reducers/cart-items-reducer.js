import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
  {
    id: 2,
    title: "Jupiter Wayfarer",
    img: "/Product D.png",
    price: 75,
    size: ["s", "m"],
    color: ["#1D1F22", "#15A4C3", "#EA8120"],
    totalPurchase: 0,
  },
];

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart(state, action) {
      const addProduct = action.payload;
      state.push(addProduct);
    },
  },
});

export const { addToCart } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;