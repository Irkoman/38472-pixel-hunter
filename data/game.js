export const counters = {
  time: 0,
  lives: ['empty', 'full', 'full'],
  stats: ['wrong', 'slow', 'fast', 'correct', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown']
};

export const gameData1 = {
  task: 'Угадайте для каждого изображения: фото или рисунок?',
  options: {
    option1: 'http://placehold.it/468x458',
    option2: 'http://placehold.it/468x458'
  }
};

export const gameData2 = {
  task: 'Угадай, фото или рисунок?',
  options: {
    option1: 'http://placehold.it/705x455'
  }
};

export const gameData3 = {
  task: 'Найдите рисунок среди изображений',
  options: {
    option1: 'http://placehold.it/304x455',
    option2: 'http://placehold.it/304x455',
    option3: 'http://placehold.it/304x455'
  }
};

export const statsData = {
  verdict: 'Победа!',
  results: [
    {
      number: '1.',
      stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
      points: '× 100',
      score: '900',
      extra: [
        {
          name: 'Бонус за скорость:',
          amount: '1 ',
          type: 'fast',
          points: '× 50',
          score: '50'
        }, {
          name: 'Бонус за жизни:',
          amount: '2 ',
          type: 'heart',
          points: '× 50',
          score: '100'
        }, {
          name: 'Штраф за медлительность:',
          amount: '2 ',
          type: 'slow',
          points: '× 50',
          score: '-100'
        }
      ],
      total: '950'
    }, {
      number: '2.',
      stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'wrong'],
      points: '',
      score: '',
      extra: [],
      total: 'Fail'
    }, {
      number: '3.',
      stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
      points: '× 100',
      score: '',
      extra: [
        {
          name: 'Бонус за жизни:',
          amount: '2 ',
          type: 'heart',
          points: '× 50',
          score: '100'
        }
      ],
      total: '950'
    }
  ]
};
