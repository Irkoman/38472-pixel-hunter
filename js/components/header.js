const renderLives = (lives) => {
  let gameLives = '';

  for (let i = 3; i > 0; i--) {
    if (i > lives) {
      gameLives += '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
    } else {
      gameLives += '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';
    }
  }

  return gameLives;
};

export const header = (data) => {
  return `
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    ${data
      ? `<h1 class="game__timer">${data.time}</h1>
        <div class="game__lives">${renderLives(data.lives)}</div>`
      : ''}
  `;
};

export const updateHeader = (newHeader) => {
  const headerElement = document.querySelector('header');
  headerElement.innerHTML = newHeader;
};
