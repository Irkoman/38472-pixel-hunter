import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import {counters, gameData1} from '../data/game';
import header from './components/header';
import statistics from './components/statistics';
import game2 from './game-2';

const task = `
  <p class="game__task">${gameData1.task}</p>
`;

const form = `
  <form class="game__content">
    <div class="game__option">
      <img src="${gameData1.options.option1}" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img src="${gameData1.options.option2}" alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
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

const game1 = getElementFromTemplate(template);

const gameAnswers = Array.from(game1.querySelectorAll('.game__answer'));

gameAnswers.forEach(function (gameAnswer) {
  gameAnswer.addEventListener('click', () => renderSlide(game2));
});

export default game1;
