import { getGreatestCommonDivisor } from "./getGreatestCommonDivisor";

test("should calculate the greatest common divisor of 5 and 2", () => {
  const result = getGreatestCommonDivisor(5, 2);
  expect(result).toEqual(1);
});

test("should calculate the greatest common divisor of 4 and 8", () => {
  const result = getGreatestCommonDivisor(4, 8);
  expect(result).toEqual(4);
});

test("should calculate the greatest common divisor of 6 and 9", () => {
  const result = getGreatestCommonDivisor(6, 9);
  expect(result).toEqual(3);
});
