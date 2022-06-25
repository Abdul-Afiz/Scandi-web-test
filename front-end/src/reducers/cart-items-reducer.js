import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { verifyProduct } from "../util/helper-function";

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const checkAttr = verifyProduct(state, product);
      if (checkAttr) {
        return;
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

    deductQuantity(state, action) {
      const id = action.payload;

      const findItem = state.find((product) => product.productId === id);

      if (findItem) {
        const modifiedItem = {
          ...findItem,
          quantity: findItem.quantity === 0 ? 0 : findItem.quantity - 1,
        };
        return state.map((item) =>
          item.productId === id ? modifiedItem : item
        );
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const findItem = state.find((product) => product.productId === id);
      if (findItem) {
        return state.filter((item) => item.productId !== id);
      }
    },
  },
});

export const { addToCart, addQuantity, deductQuantity, removeItemFromCart } =
  cartItemsSlice.actions;
export default cartItemsSlice.reducer;
