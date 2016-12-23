import AbstractView from '../view';

class SaveView extends AbstractView {
  getMarkup() {
    return `
      <div class="result">
        <h3>Сохраняем результаты игры...</h3>
      </div>
    `;
  }
}

export default () => new SaveView().element;
