import startGameLoop from '../shared/gameLoop.js';
import { getRandomNumber, isPrime } from '../shared/math.js';
import { printRules } from '../shared/utils.js';

const RULES = 'Find the greatest common divisor of given numbers.';
const GAMES_COUNT = 3;
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

const startPrimeGame = (userName) => {
  printRules(RULES);
  startGameLoop(userName, GAMES_COUNT, getNextQuestion);
};

export default startPrimeGame;
