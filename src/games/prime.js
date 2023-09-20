import { getRandomNumber, isPrime } from '../shared/math.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const PRIME_PROBABILITY = 0.5;

const isMustBePrime = () => Math.random() > PRIME_PROBABILITY;

const getNextQuestion = () => {
  const mustBePrime = isMustBePrime();
  let number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

  while (isPrime(number) !== mustBePrime) number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

  const correctAnswer = mustBePrime ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default getNextQuestion;
