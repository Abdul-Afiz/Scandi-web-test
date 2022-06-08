export const splitTitle = (data) => {
  let splitData = data.split(" ");
  return {
    head: splitData[0],
    tail: splitData.slice(1).join(" "),
  };
};
