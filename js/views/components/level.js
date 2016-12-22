import AbstractView from '../../view';
import ScoreView from './score';

export default class LevelView extends AbstractView {
  constructor(state, levelContent) {
    super();
    this.state = state;
    this.score = new ScoreView(state);
    this.levelContent = levelContent;
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  getMarkup() {
    switch (this.levelContent.type) {
      case 'double':
        return `<div class="game">
          <p class="game__task">${this.levelContent.task}</p>
          <form class="game__content">
            ${this.levelContent.options.map((option, index) => `
              <div class="game__option">
                <img src="${option.image}" alt="Option ${index + 1}" width="468" height="458">
                <label class="game__answer  game__answer--photo">
                  <input name="question${index + 1}" type="radio" value="photo">
                  <span>Фото</span>
                </label>
                <label class="game__answer  game__answer--paint">
                  <input name="question${index + 1}" type="radio" value="paint">
                  <span>Рисунок</span>
                </label>
              </div>
            `).join('')}
          </form>
          ${this.score.getMarkup()}
        </div>`;

      case 'triple':
        return `<div class="game">
          <p class="game__task">${this.levelContent.task}</p>
          <form class="game__content  game__content--triple">
            ${this.levelContent.options.map((option, index) => `
              <div class="game__option">
                <img src="${option.image}" alt="Option ${index + 1}" width="304" height="455">
              </div>
            `).join('')}
          </form>
          ${this.score.getMarkup()}
        </div>`;

      default:
        return `<div class="game">
          <p class="game__task">${this.levelContent.task}</p>
          <form class="game__content  game__content--wide">
            <div class="game__option">
              <img src="${this.levelContent.options[0].image}" alt="Option 1" width="705" height="455">
              <label class="game__answer  game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--wide  game__answer--paint">
                <input name="question1" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
          </form>
          ${this.score.getMarkup()}
        </div>`;
    }
  }

  bindHandlers() {
    const answers = this.element.querySelector('.game__content');

    answers.addEventListener('click', (e) => {
      const answer = e.target.closest('.game__answer') || e.target.closest('.game__option');

      if (answer) {
        if (this.levelContent.type === 'triple') {
          this.tripleAnswerHandler(answer, answers);
        } else {
          this.singleAnswerHandler(answers);
        }
      }
    });
  }

  singleAnswerHandler(container) {
    const radios = Array.from(container.querySelectorAll('input[type="radio"]:checked'));

    if (radios.length < this.levelContent.options.length) {
      return;
    }

    const isAnswerCorrect = () => {
      return radios.every((radio, index) => {
        return radio.value === this.levelContent.options[index].answer;
      });
    };

    this._onAnswer(isAnswerCorrect());
  }

  tripleAnswerHandler(element, container) {
    const options = Array.from(container.querySelectorAll('.game__option'));

    const isAnswerCorrect = () => {
      let isCorrect;

      options.forEach((option, index) => {
        if (option === element) {
          isCorrect = this.levelContent.options[index].isAnswer;
        }
      });

      return isCorrect;
    };

    this._onAnswer(isAnswerCorrect());
  }
}
