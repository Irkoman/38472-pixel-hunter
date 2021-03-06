import Application from '../application';
import AbstractView from '../view';
import HeaderView from './components/header';
import {formatStats} from '../data/game-controller';

class StatsView extends AbstractView {
  constructor(stats) {
    super();
    this._stats = stats.map((item) => formatStats(item));
    this._header = new HeaderView();
    this._header.onBackClick = () => Application.showIntro();
    this.element.insertBefore(this._header.element, this.element.firstChild);
  }

  getMarkup() {
    return `
      <div class="result">
        ${this._stats.map((result, index) => `
          <h1>${result.verdict}</h1>
          <table class="result__table">
            <tr>
              <td class="result__number">${index + 1}.</td>
              <td colspan="2">
                <ul class="stats">
                  ${result.answers.map((answer) => `
                    <li class="stats__result stats__result--${answer}"></li>
                  `).join('')}
                </ul>
              </td>
              <td class="result__points">× 100</td>
              <td class="result__total">${result.score}</td>
            </tr>
      
            ${result.extra.map((extraItem) => `
              <tr>
                <td></td>
                <td class="result__extra">${extraItem.name}</td>
                <td class="result__extra">${extraItem.amount}<span class="stats__result stats__result--${extraItem.type}"></span></td>
                <td class="result__points">${extraItem.points}</td>
                <td class="result__total">${extraItem.score}</td>
              </tr>
            `).join('')}
      
            <tr>
              <td colspan="5" class="result__total  result__total--final">${result.total}</td>
            </tr>
          </table>
        `).join('')}
      </div>
    `;
  }
}

export default (stats) => {
  return new StatsView(stats).element;
};
