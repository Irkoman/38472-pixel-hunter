import Application from '../application';
import AbstractView from '../view';
import HeaderView from './components/header';

class RulesView extends AbstractView {
  constructor() {
    super();
    this._header = new HeaderView();
    this._header.onBackClick = () => Application.showGreeting();
    this.element.insertBefore(this._header.element, this.element.firstChild);
  }

  getMarkup() {
    return `
      <div class="rules central--none">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">Угадай 10 раз для каждого изображения — фото <img src="img/photo_icon.png" width="16" height="16"> или рисунок <img src="img/paint_icon.png" width="16" height="16" alt="">.<br>Фотографиями или рисунками могут быть оба изображения.<br>На каждую попытку отводится 30 секунд.<br>Ошибиться можно не более 3 раз.<br><br>Готовы?</p>
         <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </div>
    `;
  }

  bindHandlers() {
    const rulesForm = this.element.querySelector('.rules__form');
    const rulesSubmit = this.element.querySelector('.rules__button');
    const rulesInput = this.element.querySelector('.rules__input');

    rulesInput.addEventListener('input', (e) => {
      rulesSubmit.disabled = !e.target.value;
    });

    rulesForm.addEventListener('submit', (e) => {
      e.preventDefault();
      Application.showGame(rulesInput.value);
    });
  }
}

export default () => new RulesView().element;
