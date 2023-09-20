import readlineSync from 'readline-sync';

export const getUserAnswer = (question) => {
  console.log(question);
  return readlineSync.question('Your answer: ');
};

export const retriveUserName = () => readlineSync.question('May I have your name? ');

export const printSuccessGameMessage = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const printCorrectAnswerMessage = () => {
  console.log('Correct!');
};

export const printWrongAnswerMessage = (answer, correctAnswer, userName) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
};

export const printRules = (rules) => {
  console.log(rules);
};
