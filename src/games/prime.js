import {
  alertCorrect, alertWrong, getRandomNumber, getUserAnswer, showQuestion,
} from '../index.js';
import { GUESS_YES, GUESS_NO } from '../constants.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const play = () => {
  const guessedNumber = getRandomNumber();
  const isGuessedNumberPrime = isPrime(guessedNumber);

  showQuestion(guessedNumber);

  const answer = getUserAnswer();
  if (
    (answer === GUESS_YES && isGuessedNumberPrime)
    || (answer === GUESS_NO && !isGuessedNumberPrime)
  ) {
    alertCorrect();
    return true;
  }
  alertWrong(answer, isGuessedNumberPrime ? GUESS_YES : GUESS_NO);
  return false;
};

export default {
  play,
  intro: `Answer "${GUESS_YES}" if given number is prime. Otherwise answer "${GUESS_NO}"`,
};
