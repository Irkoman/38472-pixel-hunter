const statistics = (state) => {
  return `
    <div class="stats">
      <ul class="stats">
        ${state.stats.map((result) => `
          <li class="stats__result stats__result--${result}"></li>
        `).join('')}
      </ul>
    </div>
  `;
};

export default statistics;
