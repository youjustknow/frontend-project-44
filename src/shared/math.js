export const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max - min));

export const findGcd = (a, b) => {
  if (b === 0) return a;
  return findGcd(b, a % b);
};

export const generateArithmeticProgression = (start, step, length) => Array(length)
  .fill(start)
  .map((num, index) => num + step * index);

export const isPrime = (number) => {
  for (let currentDivider = 2; currentDivider <= Math.sqrt(number); currentDivider += 1) {
    if (number % currentDivider === 0) return false;
  }

  return true;
};
