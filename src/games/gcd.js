import { findGcd, getRandomNumber } from '../shared/math.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getNextQuestion = () => {
  const left = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const right = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

  const correctAnswer = findGcd(left, right).toString();

  return [`${left} ${right}`, correctAnswer];
};

export default getNextQuestion;
