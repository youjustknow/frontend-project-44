import {
  getRandom,
  getUserAnswer,
  printCorrectAnswerMessage,
  printRules,
  printSuccessGameMessage,
  printWrongAnswerMessage,
} from '../shared/utils.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const GAMES_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getNextQuestion = () => {
  const number = getRandom(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return [number, correctAnswer];
};

const startGameLoop = (userName) => {
  for (let gameNo = 1; gameNo <= GAMES_COUNT; gameNo += 1) {
    const [number, correctAnswer] = getNextQuestion();
    const answer = getUserAnswer(`Question: ${number}:`);

    if (answer !== correctAnswer) {
      printWrongAnswerMessage(answer, correctAnswer, userName);
      return 0;
    }

    printCorrectAnswerMessage();
  }

  printSuccessGameMessage(userName);

  return 0;
};

const startEvenGame = (userName) => {
  printRules(RULES);
  startGameLoop(userName);
};

export default startEvenGame;
