import {
  getUserAnswer,
  printCorrectAnswerMessage,
  printSuccessGameMessage,
  printWrongAnswerMessage,
} from './utils.js';

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

export default startGameLoop;
