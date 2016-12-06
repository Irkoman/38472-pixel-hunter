import {counters} from '../../data/game-data';

const statistics = `
  <div class="stats">
    <ul class="stats">
      ${counters.stats.map((result) => `
        <li class="stats__result stats__result--${result}"></li>
      `).join('')}
    </ul>
  </div>
`;

export default statistics;
