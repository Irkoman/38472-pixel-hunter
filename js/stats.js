import getElementFromTemplate from './get-element-from-template';

const data = {
  verdict: 'Победа!',
  results: [
    {
      number: '1.',
      stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
      points: '× 100',
      score: '900',
      extra: [
        {
          name: 'Бонус за скорость:',
          amount: '1 ',
          type: 'fast',
          points: '× 50',
          score: '50'
        }, {
          name: 'Бонус за жизни:',
          amount: '2 ',
          type: 'heart',
          points: '× 50',
          score: '100'
        }, {
          name: 'Штраф за медлительность:',
          amount: '2 ',
          type: 'slow',
          points: '× 50',
          score: '-100'
        }
      ],
      total: '950'
    }, {
      number: '2.',
      stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'wrong'],
      points: '',
      score: '',
      extra: [],
      total: 'Fail'
    }, {
      number: '3.',
      stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
      points: '× 100',
      score: '',
      extra: [
        {
          name: 'Бонус за жизни:',
          amount: '2 ',
          type: 'heart',
          points: '× 50',
          score: '100'
        }
      ],
      total: '950'
    }
  ]
};

const header = `
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
`;

const verdict = `
  <h1>${data.verdict}</h1>
`;

const results = `
  ${data.results.map((result) => `
    <table class="result__table">
      <tr>
        <td class="result__number">${result.number}</td>
        <td colspan="2">
          <ul class="stats">
            ${result.stats.map((stats) => `
              <li class="stats__result stats__result--${stats}"></li>
            `).join('')}
          </ul>
        </td>
        <td class="result__points">${result.points}</td>
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
`;

const stats = `
  ${header}
  <div class="result">
    ${verdict}
    ${results}
  </div>
`;

export default getElementFromTemplate(stats);
