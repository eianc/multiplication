export const generateArrayOfNumbers = (limit: number) => {
  const result: number[] = [];
  for (let i: number = 1; i <= limit; i++) {
    result.push(i);
  }
  return result;
};
