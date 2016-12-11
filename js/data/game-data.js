export const counters = {
  time: 0,
  lives: 3,
  question: 1,
  stats: ['unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown'],
  points: 0
};

export const ANSWER_TIME = {
  MAX: 30,
  SLOW: 20,
  FAST: 10
};

export const questions = [
  {
    number: 1,
    task: 'Угадайте для каждого изображения: фото или рисунок?',
    time: 0,
    options: [
      {
        image: 'http://placehold.it/468x458',
        answer: 'photo'
      }, {
        image: 'http://placehold.it/468x458',
        answer: 'paint'
      }
    ]
  }, {
    number: 2,
    task: 'Угадай, фото или рисунок?',
    time: 0,
    options: [
      {
        image: 'http://placehold.it/705x455',
        answer: 'photo'
      }
    ]
  }, {
    number: 3,
    task: 'Найдите рисунок среди изображений',
    time: 0,
    options: [
      {
        image: 'http://placehold.it/304x455',
        isAnswer: false
      }, {
        image: 'http://placehold.it/304x455',
        isAnswer: true
      }, {
        image: 'http://placehold.it/304x455',
        isAnswer: false
      }
    ]
  }, {
    number: 4,
    task: 'Угадай, фото или рисунок?',
    time: 0,
    options: [
      {
        image: 'http://placehold.it/705x455',
        answer: 'paint'
      }
    ]
  }, {
    number: 5,
    task: 'Угадайте для каждого изображения: фото или рисунок?',
    time: 0,
    options: [
      {
        image: 'http://placehold.it/468x458',
        answer: 'paint'
      }, {
        image: 'http://placehold.it/468x458',
        answer: 'photo'
      }
    ]
  }, {
    number: 6,
    task: 'Угадай, фото или рисунок?',
    time: 0,
    options: [
      {
        image: 'http://placehold.it/705x455',
        answer: 'photo'
      }
    ]
  }, {
    number: 7,
    task: 'Найдите рисунок среди изображений',
    time: 0,
    options: [
      {
        image: 'http://placehold.it/304x455',
        isAnswer: true
      }, {
        image: 'http://placehold.it/304x455',
        isAnswer: false
      }, {
        image: 'http://placehold.it/304x455',
        isAnswer: false
      }
    ]
  }, {
    number: 8,
    task: 'Угадай, фото или рисунок?',
    time: 0,
    options: [
      {
        image: 'http://placehold.it/705x455',
        answer: 'photo'
      }
    ]
  }, {
    number: 9,
    task: 'Найдите рисунок среди изображений',
    time: 0,
    options: [
      {
        image: 'http://placehold.it/304x455',
        isAnswer: false
      }, {
        image: 'http://placehold.it/304x455',
        isAnswer: false
      }, {
        image: 'http://placehold.it/304x455',
        isAnswer: true
      }
    ]
  }, {
    number: 10,
    task: 'Угадайте для каждого изображения: фото или рисунок?',
    time: 0,
    options: [
      {
        image: 'http://placehold.it/468x458',
        answer: 'photo'
      }, {
        image: 'http://placehold.it/468x458',
        answer: 'paint'
      }
    ]
  }
];

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
