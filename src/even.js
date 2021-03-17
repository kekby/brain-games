import readlineSync from 'readline-sync';
import { greet } from './cli.js';

const GUESS_YES = 'yes';
const GUESS_NO = 'no';
const CORRECT_ANSWERS_TO_WIN = 3;

const name = greet();

console.log(`Answer '${GUESS_YES}' if the number is even, otherwise answer '${GUESS_NO}'.`);

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

const guess = () => {
  const MAX_NUMBER = 100;
  const guessedNumber = Math.floor(Math.random() * Math.floor(MAX_NUMBER));

  console.log(`Question: ${guessedNumber}`);
  const answer = readlineSync.question('Your answer: ');

  const isAnswerCorrect = isCorrectAnswer(answer, guessedNumber);

  if (isAnswerCorrect) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${mapNumberToAnswer(guessedNumber)}`);
  return false;
};

const startEvenGame = () => {
  let correctAnswers = 0;
  while (correctAnswers < CORRECT_ANSWERS_TO_WIN) {
    const isGuessCorrect = guess();
    if (isGuessCorrect) {
      correctAnswers += 1;
    }
  }

  console.log(`Congratulations, ${name}`);
};

export default startEvenGame;
