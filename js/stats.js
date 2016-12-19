import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import {header} from './components/header';
import intro from './intro';

export default (data) => {
  const results = `
    <h1>${data.verdict}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${data.answers.map((answer) => `
              <li class="stats__result stats__result--${answer}"></li>
            `).join('')}
          </ul>
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">${data.score}</td>
      </tr>

      ${data.extra.map((extraItem) => `
        <tr>
          <td></td>
          <td class="result__extra">${extraItem.name}</td>
          <td class="result__extra">${extraItem.amount}<span class="stats__result stats__result--${extraItem.type}"></span></td>
          <td class="result__points">${extraItem.points}</td>
          <td class="result__total">${extraItem.score}</td>
        </tr>
      `).join('')}

      <tr>
        <td colspan="5" class="result__total  result__total--final">${data.total}</td>
      </tr>
    </table>
  `;

  const template = `
    <header class="header">
      ${header()}
    </header>
    <div class="result">
      ${results}
    </div>
  `;

  const stats = getElementFromTemplate(template);
  const backButton = stats.querySelector('.header__back');

  backButton.addEventListener('click', () => renderSlide(intro()));

  return stats;
};
