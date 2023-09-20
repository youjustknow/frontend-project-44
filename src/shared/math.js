export const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max - min));

export const findGcd = (a, b) => {
  if (b === 0) return a;
  return findGcd(b, a % b);
};
