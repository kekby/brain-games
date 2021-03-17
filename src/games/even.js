import {
  getRandomNumber, getUserAnswer, alertCorrect, alertWrong, showQuestion,
} from '../index.js';
import { GUESS_YES, GUESS_NO } from '../constants.js';

const isEven = (number) => number % 2 === 0;

const mapNumberToAnswer = (guessedNumber) => {
  const isNumberEven = isEven(guessedNumber);

  if (isNumberEven) {
    return GUESS_YES;
  }

  return GUESS_NO;
};

const isCorrectAnswer = (answer, guessedNumber) => {
  const isNumberEven = isEven(guessedNumber);

  if ((isNumberEven && answer === GUESS_YES) || (!isNumberEven && answer === GUESS_NO)) {
    return true;
  }

  return false;
};

const play = () => {
  const guessedNumber = getRandomNumber();
  showQuestion(guessedNumber);

  const answer = getUserAnswer();

  const isAnswerCorrect = isCorrectAnswer(answer, guessedNumber);

  if (isAnswerCorrect) {
    alertCorrect();
    return true;
  }

  alertWrong(answer, mapNumberToAnswer(guessedNumber));
  return false;
};

export default {
  play,
  intro: `Answer "${GUESS_YES}" if number is even, otherwise answer "${GUESS_NO}"`,
};
