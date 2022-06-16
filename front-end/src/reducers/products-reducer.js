import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    getProducts(state, action) {
      return action.payload;
    },
    addProducts(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addProducts, getProducts } = productSlice.actions;
export default productSlice.reducer;
