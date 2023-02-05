import { getLeastCommonMultiple } from "./getLeastCommonMultiple";

export const getCommonMultiples = (numbers, array) => {
  if (numbers.length === 1) {
    return array.filter((n) => n % numbers[0] === 0);
  }

  let l = getLeastCommonMultiple(numbers[0], numbers[1]);
  for (let i = 2; i < numbers.length; i++) {
    l = getLeastCommonMultiple(l, numbers[i]);
  }

  return array.filter((n) => n % l === 0);
};
