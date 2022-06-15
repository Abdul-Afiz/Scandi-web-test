import { configureStore } from "@reduxjs/toolkit";
import cartItems from "../reducers/cart-items-reducer";
import currencyReducer from "../reducers/currency-reducer";
import isAddedToCartReducer from "../reducers/is-added-to-cart-reducer";
import navReducer from "../reducers/nav-reducer";
import productsReducer from "../reducers/products-reducer";

const store = configureStore({
  reducer: {
    navlinks: navReducer,
    isAddedToCart: isAddedToCartReducer,
    products: productsReducer,
    cartItems,
    currency: currencyReducer,
  },
});

export default store;
