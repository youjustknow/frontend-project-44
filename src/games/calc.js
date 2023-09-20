import { getRandomNumber } from '../shared/math.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 10;
const ALLOWED_OPERATORS = ['+', '*', '-'];

const plusHandler = (a, b) => a + b;
const minusHandler = (a, b) => a - b;
const multiplyHandler = (a, b) => a * b;

const expressionHandlers = {
  '+': plusHandler,
  '-': minusHandler,
  '*': multiplyHandler,
};

const getNextQuestion = () => {
  const leftOperand = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const rightOperand = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const operatorIndex = getRandomNumber(0, ALLOWED_OPERATORS.length);

  const operator = ALLOWED_OPERATORS[operatorIndex];
  const question = `${leftOperand} ${operator} ${rightOperand}`;

  const handler = expressionHandlers[operator];

  const correctAnswer = handler(leftOperand, rightOperand).toString();

  return [question, correctAnswer];
};

export default getNextQuestion;
