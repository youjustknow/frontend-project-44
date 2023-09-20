import { getRandomNumber } from '../shared/math.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getNextQuestion = () => {
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default getNextQuestion;
