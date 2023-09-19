import startGameLoop from '../shared/gameLoop.js';
import { getRandomNumber, printRules } from '../shared/utils.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const GAMES_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getNextQuestion = () => {
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return [number, correctAnswer];
};

const startEvenGame = (userName) => {
  printRules(RULES);
  startGameLoop(userName, GAMES_COUNT, getNextQuestion);
};

export default startEvenGame;
