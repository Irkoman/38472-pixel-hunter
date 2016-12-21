import AbstractView from '../../view';

export default class HeaderView extends AbstractView {
  constructor(gameState) {
    super();
    this.state = gameState;
  }

  getMarkup() {
    return `
      <header class="header">
        <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
        </div>
        ${this.state
          ? `<h1 class="game__timer">${this.state.time}</h1>
            <div class="game__lives">${this._renderLives()}</div>`
          : ''}
       </header>
    `;
  }

  _renderLives() {
    let gameLives = '';

    for (let i = 3; i > 0; i--) {
      gameLives += `<img src="${ i > this.state.lives ? 'img/heart__empty.svg' : 'img/heart__full.svg'}" class="game__heart" alt="Life" width="32" height="32">`;
    }

    return gameLives;
  }
}
