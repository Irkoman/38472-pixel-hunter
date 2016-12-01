import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import stats from './stats';

const data = {
  time: 0,
  lives: [
    'empty',
    'full',
    'full'
  ],
  task: 'Найдите рисунок среди изображений',
  options: {
    option1: 'http://placehold.it/304x455',
    option2: 'http://placehold.it/304x455',
    option3: 'http://placehold.it/304x455'
  },
  stats: [
    'wrong',
    'slow',
    'fast',
    'correct',
    'wrong',
    'unknown',
    'slow',
    'unknown',
    'fast',
    'unknown'
  ]
};

const header = `
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${data.time}</h1>
    <div class="game__lives">
      <img src="img/heart__${data.lives[0]}.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__${data.lives[1]}.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__${data.lives[2]}.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>
  </header>
`;

const task = `
  <p class="game__task">${data.task}</p>
`;

const form = `
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="${data.options.option1}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="${data.options.option2}" alt="Option 2" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="${data.options.option3}" alt="Option 3" width="304" height="455">
    </div>
  </form>
`;

const statistics = `
  <div class="stats">
    <ul class="stats">
      ${data.stats.map((result) => `
        <li class="stats__result stats__result--${result}"></li>
      `).join('')}
    </ul>
  </div>
`;

const template = `
  ${header}
  <div class="game">
    ${task}
    ${form}
    ${statistics}
  </div>
`;

const game3 = getElementFromTemplate(template);

const gameOptions = Array.from(game3.querySelectorAll('.game__option'));

gameOptions.forEach(function (gameOption) {
  gameOption.addEventListener('click', () => renderSlide(stats));
});

export default game3;
