import AbstractView from '../../view';

export default class ScoreView extends AbstractView {
  constructor(gameState) {
    super();
    this._state = gameState;
  }

  getMarkup() {
    return `
      <div class="stats">
        <ul class="stats">
          ${this._state.stats.map((result) => `
            <li class="stats__result stats__result--${result}"></li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}
