import AbstractView from '../view';
import renderSlide from '../render-slide';
import HeaderView from './components/header';
import intro from './intro';

export default class StatsView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  getMarkup() {
    const results = `
      <h1>${this.data.verdict}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              ${this.data.answers.map((answer) => `
                <li class="stats__result stats__result--${answer}"></li>
              `).join('')}
            </ul>
          </td>
          <td class="result__points">× 100</td>
          <td class="result__total">${this.data.score}</td>
        </tr>
  
        ${this.data.extra.map((extraItem) => `
          <tr>
            <td></td>
            <td class="result__extra">${extraItem.name}</td>
            <td class="result__extra">${extraItem.amount}<span class="stats__result stats__result--${extraItem.type}"></span></td>
            <td class="result__points">${extraItem.points}</td>
            <td class="result__total">${extraItem.score}</td>
          </tr>
        `).join('')}
  
        <tr>
          <td colspan="5" class="result__total  result__total--final">${this.data.total}</td>
        </tr>
      </table>
    `;

    const template = `
      <header class="header">
        ${new HeaderView().getMarkup()}
      </header>
      <div class="result">
        ${results}
      </div>
    `;

    return template;
  }

  bindHandlers() {
    const backButton = this.element.querySelector('.header__back');

    backButton.addEventListener('click', () => renderSlide(intro()));
  }
}
