import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import {introData} from '../data/static-data';
import header from './components/header';
import intro from './intro';

export default (data) => {
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

  const template = `
    ${header()}
    <div class="result">
      ${verdict}
      ${results}
    </div>
  `;

  const stats = getElementFromTemplate(template);
  const backButton = stats.querySelector('.header__back');

  backButton.addEventListener('click', () => renderSlide(intro(introData)));

  return stats;
};
