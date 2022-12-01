const NUMBERS = [
  47, 98, 13, 31, 52, 55, 41, 62, 60, 100, 81, 48, 53, 11, 39, 33, 88, 30, 43,
  84, 17, 7, 25, 24, 68, 37, 99, 66, 19, 12, 44, 63, 91, 86, 59, 45, 78, 8, 27,
  14, 92, 57, 71, 2, 94, 6, 9, 28, 32, 51, 35, 76, 40, 21, 38, 95, 93, 34, 23,
  22, 96, 49, 36, 15, 70, 3, 20, 74, 4, 80, 85, 54, 56, 89, 58, 5, 87, 46, 79,
  16, 73, 1, 90, 10, 75, 29, 69, 97, 26, 67, 64, 72, 50, 42, 77, 82, 18, 83, 61,
  65,
];

export const normalize = (val: number, min: number = 0, max: number = 100) =>
  (val - min) / (max - min);

export const getRandomNumber = (index: number, normalized?: boolean) => {
  if (index < 0) {
    return 0;
  }
  let returnVal;
  if (index < NUMBERS.length) {
    returnVal = NUMBERS[index];
  } else {
    returnVal = NUMBERS[index % NUMBERS.length];
  }
  return normalized ? normalize(returnVal, 0, NUMBERS.length) : returnVal;
};
