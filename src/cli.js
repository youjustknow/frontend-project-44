import readlineSync from 'readline-sync';

import startCalcGame from './games/calc.js';
import startEvenGame from './games/even.js';
import startGcdGame from './games/gcd.js';
import startPrimeGame from './games/prime.js';
import startProgressionGame from './games/progression.js';

const retriveUserName = () => readlineSync.question('May I have your name? ');

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = retriveUserName();
  console.log(`Hello, ${userName}!`);

  return {
    startCalcGame: startCalcGame.bind(null, userName),
    startEvenGame: startEvenGame.bind(null, userName),
    startGcdGame: startGcdGame.bind(null, userName),
    startPrimeGame: startPrimeGame.bind(null, userName),
    startProgressionGame: startProgressionGame.bind(null, userName),
  };
};
