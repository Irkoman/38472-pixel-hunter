import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import {questions} from './data/game-data';
import {greetingData} from './data/static-data';
import header from './components/header';
import game from './game';
import greeting from './greeting';

export default (data) => {
  const content = `
    <h1 class="rules__title">${data.title}</h1>
    <p class="rules__description">${data.description}</p>
  `;

  const form = `
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="${data.placeholder}">
      <button class="rules__button  continue" type="submit" disabled>${data.button}</button>
    </form>
  `;

  const template = `
    ${header()}
    <div class="rules central--none">
      ${content}
      ${form}
    </div>
  `;

  const rules = getElementFromTemplate(template);

  let rulesForm = rules.querySelector('.rules__form');
  let rulesSubmit = rules.querySelector('.rules__button');
  let rulesInput = rules.querySelector('.rules__input');
  let backButton = rules.querySelector('.header__back');

  rulesInput.addEventListener('input', (e) => {
    rulesSubmit.disabled = !e.target.value;
  });

  rulesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderSlide(game(questions, 0));
  });

  backButton.addEventListener('click', () => renderSlide(greeting(greetingData)));

  return rules;
};
