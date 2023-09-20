import getCalcQuestion from './games/calc.js';
import getEvenQuestion from './games/even.js';
import getGcdQuestion from './games/gcd.js';
import getPrimeQuestion from './games/prime.js';
import getProgressionQuestion from './games/progression.js';
import {
  getUserAnswer,
  printCorrectAnswerMessage,
  printRules,
  printSuccessGameMessage,
  printWrongAnswerMessage,
  retriveUserName,
} from './shared/utils.js';

import {
  CALC_RULES,
  EVEN_RULES,
  PRIME_RULES,
  PROGRESSION_RULES,
  GCD_RULES,
} from './shared/rules.js';

const GAMES_COUNT = 3;

const startGameLoop = (userName, gamesCount, getNextQuestion) => {
  for (let gameNo = 1; gameNo <= gamesCount; gameNo += 1) {
    const [question, correctAnswer] = getNextQuestion();
    const answer = getUserAnswer(`Question: ${question}:`);

    if (answer !== correctAnswer) {
      printWrongAnswerMessage(answer, correctAnswer, userName);
      return 0;
    }

    printCorrectAnswerMessage();
  }

  printSuccessGameMessage(userName);

  return 0;
};

const runGame = (rules, userName, getNextQuestion, gamesCount) => {
  printRules(rules);
  startGameLoop(userName, gamesCount, getNextQuestion);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = retriveUserName();
  console.log(`Hello, ${userName}!`);

  return {
    startCalcGame: () => runGame(CALC_RULES, userName, getCalcQuestion, GAMES_COUNT),
    startEvenGame: () => runGame(EVEN_RULES, userName, getEvenQuestion, GAMES_COUNT),
    startGcdGame: () => runGame(GCD_RULES, userName, getGcdQuestion, GAMES_COUNT),
    startPrimeGame: () => runGame(PRIME_RULES, userName, getPrimeQuestion, GAMES_COUNT),
    startProgressionGame: () => runGame(
      PROGRESSION_RULES,
      userName,
      getProgressionQuestion,
      GAMES_COUNT,
    ),
  };
};
