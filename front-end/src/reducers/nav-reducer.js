import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navbar",
  initialState: {
    links: "",
    link: "",
  },
  reducers: {
    setLinks(state, action) {
      return {
        ...state,
        links: action.payload.map(({ name }) => name),
      };
    },
    changelink(state, action) {
      return {
        ...state,
        link: action.payload,
      };
    },
  },
});

export const { setLinks, changelink } = navSlice.actions;

export default navSlice.reducer;
