import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import game3 from './game-3';

const data = {
  time: 0,
  lives: [
    'empty',
    'full',
    'full'
  ],
  task: 'Угадай, фото или рисунок?',
  options: {
    option1: 'http://placehold.it/705x455'
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
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="${data.options.option1}" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
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

const game2 = getElementFromTemplate(template);

const gameAnswers = Array.from(game2.querySelectorAll('.game__answer'));

gameAnswers.forEach(function (gameAnswer) {
  gameAnswer.addEventListener('click', () => renderSlide(game3));
});

export default game2;
