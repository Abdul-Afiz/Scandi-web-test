import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   {
//     id: 1,
//     title: "Apollo Running Short",
//     img: "/product-image.png",
//     price: 50,
//     size: ["xs", "s", "m", "l"],
//     color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
//     totalPurchase: 0,
//   },
//   {
//     id: 2,
//     title: "Jupiter Wayfarer",
//     img: "/Product D.png",
//     price: 75,
//     size: ["s", "m"],
//     color: ["#1D1F22", "#15A4C3", "#EA8120"],
//     totalPurchase: 0,
//   },
// ];

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const findProduct = state.find((item) => item.title === product.title);
      if (findProduct) {
        const existingProduct = {
          ...findProduct,
          totalPurchase: findProduct.totalPurchase + 1,
        };
        return state.map((item) =>
          item.title === findProduct.title ? existingProduct : item
        );
      } else {
        state.push({ ...product, totalPurchase: product.totalPurchase + 1 });
      }
    },
    addToItem(state, action) {
      const item = action.payload;
      const findItem = state.find((product) => product.id === item.id);
      console.log(item, findItem);
      if (findItem) {
        const existingItem = {
          ...findItem,
          totalPurchase: findItem.totalPurchase + 1,
        };
        return state.map((item) =>
          item.id === findItem.id ? existingItem : item
        );
      }
    },
    deductFromItem(state, action) {
      const item = action.payload;
      const findItem = state.find((product) => product.id === item.id);
      if (findItem) {
        const existingItem = {
          ...findItem,
          totalPurchase: findItem.totalPurchase - 1,
        };
        return state.map((item) =>
          item.id === findItem.id ? existingItem : item
        );
      }
    },
  },
});

export const { addToCart, addToItem, deductFromItem } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
