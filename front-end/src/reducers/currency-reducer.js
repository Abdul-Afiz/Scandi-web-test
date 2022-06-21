import { createSlice } from "@reduxjs/toolkit";

const currencyReducer = createSlice({
  name: "currency",
  initialState: {
    currencies: "",
    currency: "",
  },
  reducers: {
    getCurrencies(state, action) {
      return {
        ...state,
        currencies: action.payload,
      };
    },
    changeCurrency(state, action) {
      return {
        ...state,
        currency: action.payload,
      };
    },
  },
});

export const { changeCurrency, getCurrencies } = currencyReducer.actions;
export default currencyReducer.reducer;
