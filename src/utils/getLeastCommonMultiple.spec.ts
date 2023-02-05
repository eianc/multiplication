import { getLeastCommonMultiple } from "./getLeastCommonMultiple";

test("should calculate the least common multiple of 5 and 2", () => {
  const result = getLeastCommonMultiple(5, 2);
  expect(result).toEqual(10);
});

test("should calculate the least common multiple of 4 and 8", () => {
  const result = getLeastCommonMultiple(4, 8);
  expect(result).toEqual(8);
});

test("should calculate the least common multiple of 6 and 9", () => {
  const result = getLeastCommonMultiple(6, 9);
  expect(result).toEqual(18);
});
