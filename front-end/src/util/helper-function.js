import { current } from "@reduxjs/toolkit";

export const setDefaultAtrributes = (product) => {
  const { attributes } = product;
  return attributes.reduce((acc, { name, items }) => {
    acc[name] = items.length > 0 ? items[0] : null;
    return acc;
  }, {});
};

export const setCartMiniDefaultAtrributes = (product) => {
  const { attributes, selectedOption } = product;
  return attributes.reduce((acc, { name, items }) => {
    const selectAttr = selectedOption;
    const selectName = selectAttr[name];
    const item = items.find((item) => item.value === selectName.value);
    acc[name] = item;
    return acc;
  }, {});
};

export const findOption = (cart) => {
  //checking inside the cart to return vslue thst corresponds to selectedOption in the same product
  const item = cart.attributes.map(({ id, items }) => {
    const selectArr = cart.selectedOption;

    //accessing the object value by the id of the attribute if it exists
    const findItem = items.find((item) => item.value === selectArr[id].value);
    return findItem.value;
  });
  return item;
};

export const isProductSelectionInCart = (checkList, selectedOption) => {
  const optionArr = Object.entries(selectedOption).map((optionValue) => [
    optionValue[0],
    optionValue[1].id,
  ]);

  return optionArr.every((option) => {
    const key = option[0];
    const checkListOption = checkList.find((item) => item[0] === key);
    return checkListOption[1] === option[1];
  });
};

export const verifyProduct = (store, newCart) => {
  // if store => cartItemReduxStore (arr) is empty return false;
  if (store.length === 0) return;

  // Check if an item is existing in a cart
  const itemAvailableInCart = current(store).filter(
    (item) => item.id === newCart.id
  );

  // if there there si no item in cart it returns false
  if (!itemAvailableInCart.length) return false;

  // selecting selectedOption from the new product to be added
  const optionsToTest = newCart.selectedOption;

  // checking if the item exists in the filteredArray
  const itemInCart = itemAvailableInCart.find((item) => {
    //converting the object to an arr
    const selectedOptionArr = Object.entries(item.selectedOption);

    //modifying the new array of selectedOption to return only the id and value
    const checkList = selectedOptionArr.map((optionValue) => [
      optionValue[0],
      optionValue[1].id,
    ]);

    //using this function to verify if the ids and value of product is same using a function
    const result = isProductSelectionInCart(checkList, optionsToTest);

    return result;
  });

  if (itemInCart === undefined) return false;
  return true;
};

//this function will receive the a product and filters the price of a product which is the same as the current currency selected in the navbar using filter method
export const priceFilter = (arr, currency) => {
  return arr.prices.filter((price) => price.currency.symbol === currency)[0]
    .amount;
};
