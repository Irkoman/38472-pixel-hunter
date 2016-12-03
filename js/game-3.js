import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import {counters, gameData3} from '../data/game';
import header from './components/header';
import statistics from './components/statistics';
import stats from './stats';

const task = `
  <p class="game__task">${gameData3.task}</p>
`;

const form = `
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="${gameData3.options.option1}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="${gameData3.options.option2}" alt="Option 2" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="${gameData3.options.option3}" alt="Option 3" width="304" height="455">
    </div>
  </form>
`;

const template = `
  ${header(counters)}
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
