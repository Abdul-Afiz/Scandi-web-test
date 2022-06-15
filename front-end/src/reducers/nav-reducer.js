import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navbar",
  initialState: "all",
  reducers: {
    changeCategory(state, action) {
      return action.payload;
    },
  },
});

export const { changeCategory } = navSlice.actions;
export default navSlice.reducer;
