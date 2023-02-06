import { getLeastCommonMultiple } from "./getLeastCommonMultiple";

export const getCommonMultiples = (
  selectedNumbers: number[],
  totalNumbers: number[]
) => {
  if (selectedNumbers.length === 1) {
    return totalNumbers.filter((n) => n % selectedNumbers[0] === 0);
  }

  let l = getLeastCommonMultiple(selectedNumbers[0], selectedNumbers[1]);
  for (let i = 2; i < selectedNumbers.length; i++) {
    l = getLeastCommonMultiple(l, selectedNumbers[i]);
  }

  return totalNumbers.filter((n) => n % l === 0);
};
