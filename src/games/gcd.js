import startGameLoop from '../shared/gameLoop.js';
import { findGcd, getRandomNumber } from '../shared/math.js';
import { printRules } from '../shared/utils.js';

const RULES = 'Find the greatest common divisor of given numbers.';
const GAMES_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getNextQuestion = () => {
  const left = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const right = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

  const correctAnswer = findGcd(left, right).toString();

  return [`${left} ${right}`, correctAnswer];
};

const startGcdGame = (userName) => {
  printRules(RULES);
  startGameLoop(userName, GAMES_COUNT, getNextQuestion);
};

export default startGcdGame;
