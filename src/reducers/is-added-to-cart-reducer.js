const isAddedToCartReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};

export const toggleAddedToCart = () => {
  return {
    type: "TOGGLE",
  };
};

export default isAddedToCartReducer;
