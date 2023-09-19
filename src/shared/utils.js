import readlineSync from 'readline-sync';

export const getRandom = (min, max) => min + Math.floor(Math.random() * (max - min));

export const getUserAnswer = (question) => {
  console.log(question);
  return readlineSync.question('Your answer: ');
};
