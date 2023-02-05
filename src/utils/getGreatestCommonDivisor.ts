export const getGreatestCommonDivisor = (a: number, b: number) => {
  if (b === 0) {
    return a;
  }
  return getGreatestCommonDivisor(b, a % b);
};
