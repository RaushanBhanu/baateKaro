// CAPITALISE
export const toCapitalise = (item) => {
  return item
    .split(" ")
    .filter((item) => {
      return item !== " " && item !== "";
    })
    .map((item) => {
      return item[0].toUpperCase() + item.substring(1).toLowerCase();
    })
    .join(" ");
};
