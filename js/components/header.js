const header = (counters) => `
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    ${counters ?
      `<h1 class="game__timer">${counters.time}</h1>
      <div class="game__lives">
        ${counters.lives.map((live) => `
          <img src="img/heart__${live}.svg" class="game__heart" alt="Life" width="32" height="32">
        `).join('')}
      </div>` : ''
    }
  </header>
`;

export default header;
