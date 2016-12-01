import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import game1 from './game-1';
import greeting from './greeting';

const header = `
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
`;

const content = `
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?
  </p>
`;

const form = `
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
`;

const template = `
  ${header}
  <div class="rules central--none">
    ${content}
    ${form}
  </div>
`;

const rules = getElementFromTemplate(template);

let rulesForm = rules.querySelector('.rules__form');
let rulesSubmit = rules.querySelector('.rules__button');
let rulesInput = rules.querySelector('.rules__input');
let backToGreeting = rules.querySelector('.header__back');

rulesInput.addEventListener('input', (e) => {
  rulesSubmit.disabled = !e.target.value;
});

rulesForm.addEventListener('submit', (e) => {
  e.preventDefault();
  renderSlide(game1);
});

backToGreeting.addEventListener('click', () => renderSlide(greeting));

export default rules;
