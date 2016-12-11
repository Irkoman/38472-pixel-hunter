import {questions} from './game-data';

export const setTime = (player, number) => {
  if (number < 0) {
    throw new RangeError('Value should not be negative');
  }

  if (number > 30) {
    throw new RangeError('Value should not be greater then 30');
  }

  player.time = number;
  return Object.assign({}, player, {time: number});
};

export const setLives = (player, number) => {
  if (number < 0) {
    throw new RangeError('Value should not be negative');
  }

  if (number > 3) {
    throw new RangeError('Value should not be greater then 3');
  }

  player.lives = number;
  return Object.assign({}, player, {lives: number});
};

export const setCurrentQuestion = (game, question) => {
  return Object.assign({}, game, {
    question: question
  });
};

export const hasQuestion = (number) => typeof questions[number - 1] !== 'undefined';

export const getQuestion = (number) => {
  if (!hasQuestion(number)) {
    throw new RangeError(`This game has no question ${number}`);
  }

  return questions[number - 1];
};
