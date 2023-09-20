import startGameLoop from '../shared/gameLoop.js';
import { generateArithmeticProgression, getRandomNumber } from '../shared/math.js';
import { printRules } from '../shared/utils.js';

const RULES = 'What number is missing in the progression?';
const GAMES_COUNT = 3;
const MIN_START_NUMBER = 1;
const MAX_START_NUMBER = 100;
const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const MIN_STEP = 2;
const MAX_STEP = 10;

const getNextQuestion = () => {
  const length = getRandomNumber(MIN_LENGTH, MAX_LENGTH);
  const start = getRandomNumber(MIN_START_NUMBER, MAX_START_NUMBER);
  const step = getRandomNumber(MIN_STEP, MAX_STEP);

  const progression = generateArithmeticProgression(start, step, length);

  const correctAnswerIndex = getRandomNumber(0, length);
  const correctAnswer = progression[correctAnswerIndex].toString();
  progression[correctAnswerIndex] = '..';

  return [progression.join(' '), correctAnswer];
};

const startProgressionGame = (userName) => {
  printRules(RULES);
  startGameLoop(userName, GAMES_COUNT, getNextQuestion);
};

export default startProgressionGame;
