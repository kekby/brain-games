import {
  alertCorrect, alertWrong, getRandomNumber, getUserAnswer, showQuestion,
} from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const play = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  showQuestion(`${a} ${b}`);

  const rightAnswer = gcd(a, b);
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
  intro: 'Find the greatest common divisor of given numbers.',
};
