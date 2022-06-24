import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const findProduct = state.find(
        (item) => item.productId === product.productId
      );
      if (findProduct) {
        const existingProduct = {
          ...findProduct,
          selectedOption: product.selectedOption,
          quantity: findProduct.quantity + 1,
        };
        return state.map((item) =>
          item.productId === findProduct.productId ? existingProduct : item
        );
      } else {
        state.push({
          ...product,
          productId: uuidv4(),
          selectedOption: product.selectedOption,
          quantity: product.quantity + 1,
        });
      }
    },

    addQuantity(state, action) {
      const product = action.payload;
      const findProduct = state.find(
        (item) => item.productId === product.productId
      );
      if (findProduct) {
        const existingProduct = {
          ...findProduct,
          quantity: findProduct.quantity + 1,
        };
        return state.map((item) =>
          item.productId === findProduct.productId ? existingProduct : item
        );
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.find((product) => product.id === id);

      if (findItem) {
        const modifiedItem = {
          ...findItem,
          selectedOption: findItem.selectedOption.filter(
            (attr, i, arr) => i !== arr.length - 1
          ),
          quantity: findItem.quantity === 0 ? 0 : findItem.quantity - 1,
        };
        return state.map((item) => (item.id === id ? modifiedItem : item));
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const findItem = state.find((product) => product.id === id);

      if (findItem) {
        return state.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addToCart, addQuantity, removeFromCart, removeItemFromCart } =
  cartItemsSlice.actions;
export default cartItemsSlice.reducer;
