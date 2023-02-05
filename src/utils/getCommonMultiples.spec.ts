import { getCommonMultiples } from "./getCommonMultiples";
import { generateArrayOfNumbers } from "./generateArrayOfNumbers";

test("should return the common multiples of one number", () => {
  const arrayOfNumbers = generateArrayOfNumbers(30);
  const result = getCommonMultiples([3], arrayOfNumbers);
  expect(result).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
});

test("should return the common multiples of two numbers", () => {
  const arrayOfNumbers = generateArrayOfNumbers(45);
  const result = getCommonMultiples([3, 5], arrayOfNumbers);
  expect(result).toEqual([15, 30, 45]);
});

test("should return an empty array when there is no multiple of two numbers", () => {
  const arrayOfNumbers = generateArrayOfNumbers(45);
  const result = getCommonMultiples([3, 28], arrayOfNumbers);
  expect(result).toEqual([]);
});

test("should return the common multiples of three numbers", () => {
  const arrayOfNumbers = generateArrayOfNumbers(144);
  const result = getCommonMultiples([3, 5, 7], arrayOfNumbers);
  expect(result).toEqual([105]);
});
