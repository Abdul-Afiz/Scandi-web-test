const isAddedToCartReducer = (
  state = { overLay: false, showCurrency: false },
  action
) => {
  switch (action.type) {
    case "TOGGLE_ADDED_TO_CART":
      return {
        ...state,
        overLay: !state.overLay,
      };

    case "CLOSE_CART":
      return {
        ...state,
        overLay: false,
      };

    case "TOGGLE_SHOW_CURRENCY":
      return {
        ...state,
        showCurrency: !state.showCurrency,
      };

    case "CLOSE_CURRENCY_TRAY":
      return {
        ...state,
        showCurrency: false,
      };
    default:
      return state;
  }
};

export const toggleAddedToCart = () => {
  return {
    type: "TOGGLE_ADDED_TO_CART",
  };
};

export const closeMiniCart = () => {
  return {
    type: "CLOSE_CART",
  };
};

export const toggleShowCurrency = () => {
  return {
    type: "TOGGLE_SHOW_CURRENCY",
  };
};

export const closeCurrencyTray = () => {
  return {
    type: "CLOSE_CURRENCY_TRAY",
  };
};

export default isAddedToCartReducer;
