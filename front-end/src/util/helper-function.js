import { current } from "@reduxjs/toolkit";

export const splitTitle = (data) => {
  let splitData = data.split(" ");
  return {
    head: splitData[0],
    tail: splitData.slice(1).join(" "),
  };
};

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
  const item = cart.attributes.map(({ id, items }) => {
    const selectArr = cart.selectedOption;
    const findItem = items.find((item) => item.value === selectArr[id].value);
    return findItem.value;
  });
  return item;
};

export const verifyProduct = (store, newCart) => {
  // if store => cartItemReduxStore (arr) is empty return false;
  if (store.length === 0) return;

  // using reduce to check the whole store, if a product has an existing selectedOption, if it has it will return true else false

  const checkStore = current(store).reduce((acc, { selectedOption }) => {
    // inside the reduce, i convert the selectedOption obj to an array, checking if the first selectedOption exist in the new added product selected product option

    acc = Object.entries(selectedOption).every((item) => {
      if (!newCart.hasOwnProperty(item[0])) return false;
      const verifyItem = newCart[item[0]].value === item[1].value;
      return verifyItem;
    });
    return acc;
  }, null);
  return checkStore;
};

//this function will receive the a product and filters the price of a product which is the same as the current currency selected in the navbar using filter method
export const priceFilter = (arr, currency) => {
  return arr.prices.filter((price) => price.currency.symbol === currency)[0]
    .amount;
};
