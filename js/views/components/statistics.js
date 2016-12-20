import AbstractView from '../../view';

export default class StatisticsView extends AbstractView {
  constructor(gameState) {
    super();
    this.state = gameState;
  }

  getMarkup() {
    return `
      <div class="stats">
        <ul class="stats">
          ${this.state.stats.map((result) => `
            <li class="stats__result stats__result--${result}"></li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  bindHandlers() {
    return super.bindHandlers();
  }
}
