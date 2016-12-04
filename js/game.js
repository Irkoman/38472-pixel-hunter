import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import {counters, statsData} from '../data/game-data';
import header from './components/header';
import statistics from './components/statistics';
import question from './components/question';
import stats from './stats';

const game = (data, index) => {

  const template = `
    ${header(counters)}
    <div class="game">
      ${question(data[index])}
      ${statistics}
    </div>
  `;

  index++;
  const gameElement = getElementFromTemplate(template);
  const gameAnswers = gameElement.querySelector('.game__answer') ?
                      Array.from(gameElement.querySelectorAll('.game__answer')) :
                      Array.from(gameElement.querySelectorAll('.game__option'));

  gameAnswers.forEach(function (gameAnswer) {
    if (index < 10) {
      gameAnswer.addEventListener('click', () => renderSlide(game(data, index)));
    } else {
      gameAnswer.addEventListener('click', () => renderSlide(stats(statsData)));
    }
  });

  return gameElement;
};

export default game;
