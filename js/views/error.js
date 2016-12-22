import AbstractView from '../view';

class ErrorView extends AbstractView {
  getMarkup() {
    return `
      <div id="intro" class="intro">
        <h1 class="intro__error">Упс! Что-то пошло не так... <br> Попробуйте в другой раз.</h1>
      </div>
    `;
  }
}

export default () => new ErrorView().element;
