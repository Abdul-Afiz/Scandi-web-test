export const splitTitle = (data) => {
  let splitData = data.split(" ");
  return {
    head: splitData[0],
    tail: splitData.slice(1).join(" "),
  };
};

export const generateId = () => Math.random(34).toString().substring(2, 5);
