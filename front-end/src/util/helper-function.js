export const splitTitle = (data) => {
  let splitData = data.split(" ");
  return {
    head: splitData[0],
    tail: splitData.slice(1).join(" "),
  };
};

export const generateId = () => Math.random(34).toString().substring(2, 5);

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
    const selectAttr = selectedOption[selectedOption.length - 1];
    const selectName = selectAttr[name];
    const item = items.find((item) => item.value === selectName.value);
    acc[name] = item;

    return acc;
  }, {});
};

export const findOption = (cart) => {
  const item = cart.attributes.map(({ id, items }) => {
    const selectArr = cart.selectedOption[cart.selectedOption.length - 1];
    const findItem = items.find((item) => item.value === selectArr[id].value);
    return findItem.value;
  });
  return item;
};

export const priceFilter = (arr, currency) => {
  return arr.prices.filter((price) => price.currency.symbol === currency)[0]
    .amount;
};
