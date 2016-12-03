import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import {counters, gameData2} from '../data/game';
import header from './components/header';
import statistics from './components/statistics';
import game3 from './game-3';

const task = `
  <p class="game__task">${gameData2.task}</p>
`;

const form = `
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="${gameData2.options.option1}" alt="Option 1" width="705" height="455">
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

const template = `
  ${header(counters)}
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
