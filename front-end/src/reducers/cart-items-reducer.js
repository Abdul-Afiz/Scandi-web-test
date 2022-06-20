import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const findProduct = state.find((item) => item.id === product.id);

      if (findProduct) {
        const existingProduct = {
          ...findProduct,
          selectedOption: findProduct.selectedOption.concat(
            product.selectedOption
          ),
          quantity: findProduct.quantity + 1,
        };
        return state.map((item) =>
          item.id === findProduct.id ? existingProduct : item
        );
      } else {
        state.push({
          ...product,
          selectedOption: [product.selectedOption],
          quantity: product.quantity + 1,
        });
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
  },
});

export const { addToCart, removeFromCart } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
