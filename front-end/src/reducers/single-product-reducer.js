import { createSlice } from "@reduxjs/toolkit";

const singleProductReducer = createSlice({
  name: "singleProduct",
  initialState: [],
  reducers: {
    getProduct(state, action) {
      return action.payload;
    },
  },
});

export const { getProduct } = singleProductReducer.actions;
export default singleProductReducer.reducer;
