import {
  getRandomNumberInRange, getRandomNumber, showQuestion, getUserAnswer, alertCorrect, alertWrong,
} from '../index.js';

const generateProgression = () => {
  const STEPS_COUNT = getRandomNumberInRange(5, 10);
  const initial = getRandomNumber();
  const step = getRandomNumberInRange(2, 10);
  const result = [];

  for (let i = 0; i < STEPS_COUNT; i += 1) {
    result.push(initial + step * i);
  }

  return result;
};

const getPlayableProgression = (progression) => {
  const HIDED_NUMBER_PLACEHOLDER = '..';

  const numberToHideIndex = getRandomNumber(progression.length - 1);
  const newProgression = [...progression];

  const hidedNumber = newProgression[numberToHideIndex];

  newProgression[numberToHideIndex] = HIDED_NUMBER_PLACEHOLDER;

  return {
    hidedNumber,
    progression: newProgression,
  };
};

const play = () => {
  const { hidedNumber, progression } = getPlayableProgression(generateProgression());
  showQuestion(progression.join(' '));

  const answer = Number(getUserAnswer());

  if (answer === hidedNumber) {
    alertCorrect();
    return true;
  }

  alertWrong(answer, hidedNumber);
  return false;
};

export default {
  play,
  intro: 'What number is missing in the progression?',
};
