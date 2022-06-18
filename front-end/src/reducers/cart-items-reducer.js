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
