import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    inStock: true,
    title: "Apollo Running Men",
    img: "/product-image.png",
    images: ["/product-image.png", "/product-image.png", "/product-image.png"],
    price: 70,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
  {
    id: 2,
    inStock: true,
    title: "Apollo Running Women",
    img: "/product-image.png",
    images: ["/product-image.png", "/product-image.png", "/product-image.png"],
    price: 50,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
  {
    id: 3,
    inStock: false,
    title: "Apollo Running Top",
    img: "/product-image.png",
    images: ["/product-image.png", "/product-image.png", "/product-image.png"],
    price: 80,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
  {
    id: 4,
    inStock: true,
    title: "Apollo Running Middle",
    img: "/product-image.png",
    images: ["/product-image.png", "/product-image.png", "/product-image.png"],
    price: 150,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
  {
    id: 5,
    inStock: true,
    title: "Apollo Running Normal",
    img: "/product-image.png",
    images: ["/product-image.png", "/product-image.png", "/product-image.png"],
    price: 90,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
  {
    id: 6,
    inStock: true,
    title: "Apollo Running Big Shirt",
    img: "/product-image.png",
    images: ["/product-image.png", "/product-image.png", "/product-image.png"],
    price: 50,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
];

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
