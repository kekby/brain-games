import readlineSync from 'readline-sync';

export const getRandomNumber = (max = 100) => Math.floor(Math.random() * Math.floor(max));

const getName = () => readlineSync.question('May I have your name? ');

const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

const playGame = (game) => {
  const CORRECT_ANSWERS_TO_WIN = 3;
  let correctAnswers = 0;

  console.log('Welcome to the Brain Games!');

  const name = getName();
  sayHello(name);

  if (game.play) {
    console.log(game.intro);
    while (correctAnswers < CORRECT_ANSWERS_TO_WIN) {
      const isGuessCorrect = game.play();
      if (isGuessCorrect) {
        correctAnswers += 1;
      } else {
        console.log(`Let's try again, ${name}!`);
      }
    }
  }

  console.log(`Congratulations, ${name}`);
};

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const alertCorrect = () => console.log('Correct!');
export const alertWrong = (answer, rightAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
export const showQuestion = (question) => console.log(`Question: ${question}`);

export default playGame;
