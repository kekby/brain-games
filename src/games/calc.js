import {
  getRandomNumber, getUserAnswer, alertCorrect, alertWrong,
} from '../index.js';

const getRandomExpression = () => {
  const MAX_ALLOWED_NUMBER = 20;
  const allowedExpressions = [
    {
      toString: (lhs, rhs) => `${lhs} + ${rhs}`,
      calculate: (lhs, rhs) => lhs + rhs,
    },
    {
      toString: (lhs, rhs) => `${lhs} - ${rhs}`,
      calculate: (lhs, rhs) => lhs - rhs,
    },
    {
      toString: (lhs, rhs) => `${lhs} * ${rhs}`,
      calculate: (lhs, rhs) => lhs * rhs,
    },
  ];

  const lhs = getRandomNumber(MAX_ALLOWED_NUMBER);
  const rhs = getRandomNumber(MAX_ALLOWED_NUMBER);
  const expression = allowedExpressions[getRandomNumber(allowedExpressions.length)];

  return {
    lhs,
    rhs,
    expression,
  };
};

const play = () => {
  const { lhs, rhs, expression } = getRandomExpression();
  console.log(`Question: ${expression.toString(lhs, rhs)}`);

  const rightAnswer = expression.calculate(lhs, rhs);
  const answer = Number(getUserAnswer());

  if (rightAnswer === answer) {
    alertCorrect();
    return true;
  }

  alertWrong(answer, rightAnswer);
  return false;
};

export default {
  play,
  intro: 'What is the result of the expression?',
};
