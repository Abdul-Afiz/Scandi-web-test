import { createSlice } from "@reduxjs/toolkit";

const currencyReducer = createSlice({
  name: "currency",
  initialState: "$",
  reducers: {
    changeCurrency(state, action) {
      return action.payload;
    },
  },
});

export const { changeCurrency } = currencyReducer.actions;
export default currencyReducer.reducer;
