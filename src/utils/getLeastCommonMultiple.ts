import { getGreatestCommonDivisor } from "./getGreatestCommonDivisor";

export const getLeastCommonMultiple = (a: number, b: number) => {
  return (a * b) / getGreatestCommonDivisor(a, b);
};
