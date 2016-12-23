export const initGame = (game) => {
  return JSON.parse(JSON.stringify(game));
};

export const initialGame = {
  time: 30,
  lives: 3,
  question: 0,
  stats: Array.from(new Array(10), () => 'unknown')
};

export const Answer = {
  UNKNOWN: 'unknown',
  WRONG: 'wrong',
  CORRECT: 'correct',
  SLOW: 'slow',
  FAST: 'fast'
};

export const rateAnswerSpeed = (time) => {
  if (time < 10) {
    return Answer.SLOW;
  } else if (time < 20) {
    return Answer.CORRECT;
  } else {
    return Answer.FAST;
  }
};

export const setTime = (game, number) => {
  if (number < 0) {
    throw new RangeError('Time should not be negative');
  }

  if (number > 30) {
    throw new RangeError('Time should not be greater than 30');
  }

  game.time = number;
  return Object.assign({}, game, {time: number});
};

export const setLives = (game, number) => {
  if (number < 0) {
    throw new RangeError('Number of lives should not be negative');
  }

  if (number > 3) {
    throw new RangeError('Number of lives should not be greater than 3');
  }

  game.lives = number;
  return Object.assign({}, game, {lives: number});
};

export const setCurrentQuestion = (game, number) => {
  if (number < 0) {
    throw new RangeError('Value should not be negative');
  }

  if (number > 10) {
    throw new RangeError('Value should not be greater than number of questions');
  }

  game.question = number;
  return Object.assign({}, game, {question: number});
};

export const setStats = (game, answer) => {
  let gameInProgress = JSON.parse(JSON.stringify(game));
  gameInProgress.stats[gameInProgress.question] = answer;
  return gameInProgress;
};

export const isGameOver = (game) => {
  return game.lives <= 0;
};

export const setVerdict = (lives) => {
  return lives > 0 ? 'Победа!' : 'Фэйл';
};

export const computeScore = (game) => {
  if (game.lives === 0) {
    return 0;
  }

  const correctAnswers = game.stats.filter((answer) => answer !== Answer.UNKNOWN && answer !== Answer.WRONG);
  return correctAnswers.length * 100;
};

export const computeTotal = (score, extra) => {
  return extra.reduce((prev, cur) => prev + cur.score, score);
};

export const getLivesExtra = (game) => {
  if (game.lives === 0) {
    return [];
  }

  return [
    {
      name: 'Бонус за жизни:',
      type: 'heart',
      amount: game.lives,
      points: '× 50',
      score: game.lives * 50
    }
  ];
};

export const getFastExtra = (game) => {
  const fastAnswers = game.stats.filter((answer) => answer === Answer.FAST);

  if (game.lives === 0 || fastAnswers.length === 0) {
    return [];
  }

  return [
    {
      name: 'Бонус за скорость:',
      type: 'fast',
      amount: fastAnswers.length,
      points: '× 50',
      score: fastAnswers.length * 50
    }
  ];
};

export const getSlowExtra = (game) => {
  const slowAnswers = game.stats.filter((answer) => answer === Answer.SLOW);

  if (game.lives === 0 || slowAnswers.length === 0) {
    return [];
  }

  return [
    {
      name: 'Штраф за медлительность:',
      type: 'slow',
      amount: slowAnswers.length,
      points: '× 50',
      score: slowAnswers.length * -50
    }
  ];
};

export const formatStats = (game) => {
  let extra = getLivesExtra(game).concat(getFastExtra(game)).concat(getSlowExtra(game));
  let score = computeScore(game);
  let total = computeTotal(score, extra);

  const stats = {
    verdict: setVerdict(game.lives),
    answers: game.stats,
    score: score,
    extra: extra,
    total: total
  };

  return stats;
};
