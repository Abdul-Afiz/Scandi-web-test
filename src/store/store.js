import { configureStore } from "@reduxjs/toolkit";
import cartItems from "../reducers/cart-items-reducer";
import isAddedToCartReducer from "../reducers/is-added-to-cart-reducer";
import productsReducer from "../reducers/products-reducer";

const store = configureStore({
  reducer: {
    isAddedToCart: isAddedToCartReducer,
    products: productsReducer,
    cartItems,
  },
});

export default store;
