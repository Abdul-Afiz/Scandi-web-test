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

export const priceFilter = (arr, currency) => {
  return arr.prices.filter((price) => price.currency.symbol === currency)[0]
    .amount;
};
