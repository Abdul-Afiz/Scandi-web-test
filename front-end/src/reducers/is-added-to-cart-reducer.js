const isAddedToCartReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;

    case "CLOSE":
      return action.value;
    default:
      return state;
  }
};

export const toggleAddedToCart = () => {
  return {
    type: "TOGGLE",
  };
};

export const closeMiniCart = (value) => {
  return {
    type: "CLOSE",
    value,
  };
};

export default isAddedToCartReducer;
