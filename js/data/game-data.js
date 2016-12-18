export const questions = [
  {
    type: 'double',
    task: 'Угадайте для каждого изображения: фото или рисунок?',
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
    type: 'single',
    task: 'Угадай, фото или рисунок?',
    options: [
      {
        image: 'http://placehold.it/705x455',
        answer: 'photo'
      }
    ]
  }, {
    type: 'triple',
    task: 'Найдите рисунок среди изображений',
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
    type: 'single',
    task: 'Угадай, фото или рисунок?',
    options: [
      {
        image: 'http://placehold.it/705x455',
        answer: 'paint'
      }
    ]
  }, {
    type: 'double',
    task: 'Угадайте для каждого изображения: фото или рисунок?',
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
    type: 'single',
    task: 'Угадай, фото или рисунок?',
    options: [
      {
        image: 'http://placehold.it/705x455',
        answer: 'photo'
      }
    ]
  }, {
    type: 'triple',
    task: 'Найдите рисунок среди изображений',
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
    type: 'single',
    task: 'Угадай, фото или рисунок?',
    options: [
      {
        image: 'http://placehold.it/705x455',
        answer: 'photo'
      }
    ]
  }, {
    type: 'triple',
    task: 'Найдите рисунок среди изображений',
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
    type: 'double',
    task: 'Угадайте для каждого изображения: фото или рисунок?',
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
