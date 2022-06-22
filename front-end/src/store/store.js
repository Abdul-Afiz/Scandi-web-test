import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "../reducers/cart-items-reducer";
import currencyReducer from "../reducers/currency-reducer";
import isAddedToCartReducer from "../reducers/is-added-to-cart-reducer";
import navReducer from "../reducers/nav-reducer";
import productsReducer from "../reducers/products-reducer";
import singleProductReducer from "../reducers/single-product-reducer";

const store = configureStore({
  reducer: {
    navlinks: navReducer,
    isAddedToCart: isAddedToCartReducer,
    products: productsReducer,
    cartItems: cartItemsReducer,
    allCurrency: currencyReducer,
    singleProduct: singleProductReducer,
  },
});

export default store;
