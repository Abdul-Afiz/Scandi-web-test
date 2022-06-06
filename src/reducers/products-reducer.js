import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    inStock: true,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
  {
    id: 2,
    inStock: true,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
  {
    id: 3,
    inStock: false,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
  {
    id: 4,
    inStock: true,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
  {
    id: 5,
    inStock: true,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
  {
    id: 6,
    inStock: true,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, action) {
      const newproduct = action.payload;
      state.push(newproduct);
    },
  },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
