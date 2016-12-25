import AbstractView from '../../view';
import ScoreView from './score';
import 'element-closest';

export default class LevelView extends AbstractView {
  constructor(state, levelContent) {
    super();
    this._state = state;
    this._score = new ScoreView(state);
    this._levelContent = levelContent;
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  getMarkup() {
    let content;

    switch (this._levelContent.type) {
      case 'two-of-two':
        content = `
          <form class="game__content">
            ${this._levelContent.answers.map((answer, index) => `
              <div class="game__option">
                <div class="game__image game__image--two-of-two" style="background-image: url('${answer.image.url}')"></div>
                <label class="game__answer  game__answer--photo">
                  <input name="question${index + 1}" type="radio" value="photo">
                  <span>Фото</span>
                </label>
                <label class="game__answer  game__answer--paint">
                  <input name="question${index + 1}" type="radio" value="painting">
                  <span>Рисунок</span>
                </label>
              </div>
            `).join('')}
          </form>`;
        break;

      case 'one-of-three':
        content = `
          <form class="game__content  game__content--triple">
            ${this._levelContent.answers.map((answer, index) => `
              <div class="game__option">
                <div class="game__image game__image--one-of-three" style="background-image: url('${answer.image.url}')"></div>
              </div>
            `).join('')}
          </form>`;
        break;

      default:
        content = `
          <form class="game__content  game__content--wide">
            <div class="game__option">
              <div class="game__image game__image--tinder-like" style="background-image: url('${this._levelContent.answers[0].image.url}')"></div>
              <label class="game__answer  game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--wide  game__answer--paint">
                <input name="question1" type="radio" value="painting">
                <span>Рисунок</span>
              </label>
            </div>
          </form>`;
        break;
    }

    const template = `
      <div class="game">
        <p class="game__task">${this._levelContent.question}</p>
        ${content}
        ${this._score.getMarkup()}
      </div>
    `;

    return template;
  }

  bindHandlers() {
    const answers = this.element.querySelector('.game__content');

    answers.addEventListener('click', (e) => {
      const answer = e.target.closest('.game__answer') || e.target.closest('.game__option');

      if (answer) {
        if (this._levelContent.type === 'one-of-three') {
          this.tripleAnswerHandler(answer, answers);
        } else {
          this.singleAnswerHandler(answers);
        }
      }
    });
  }

  singleAnswerHandler(container) {
    const radios = Array.from(container.querySelectorAll('input[type="radio"]:checked'));

    if (radios.length < this._levelContent.answers.length) {
      return;
    }

    const isAnswerCorrect = () => {
      return radios.every((radio, index) => {
        return radio.value === this._levelContent.answers[index].type;
      });
    };

    this._onAnswer(isAnswerCorrect());
  }

  tripleAnswerHandler(element, container) {
    const options = Array.from(container.querySelectorAll('.game__option'));

    let allAnswers = [];
    let checkedAnswer = '';

    options.forEach((option, index) => {
      allAnswers.push(this._levelContent.answers[index].type);

      if (option === element) {
        checkedAnswer = this._levelContent.answers[index].type;
      }
    });

    let filteredAnswers = allAnswers.filter((item) => (item === checkedAnswer));

    this._onAnswer(filteredAnswers.length === 1);
  }
}
