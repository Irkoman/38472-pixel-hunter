import AbstractView from '../view';
import renderSlide from '../render-slide';
import gameModel from '../data/game-model';
import {setAnswerType, ANSWER_TYPE} from '../data/game-controller';
import HeaderView from './components/header';
import QuestionView from './components/question';
import StatisticsView from './components/statistics';
import StatsView from './stats';

class GameView extends AbstractView {
  constructor(data) {
    super();
    this.currentQuestion = gameModel.state.question;
    this.currentQuestionContent = gameModel.getQuestionContent();
    this.header = new HeaderView(gameModel.state);
    this.question = new QuestionView(this.currentQuestionContent);
    this.statistics = new StatisticsView(gameModel.state);
    this._interval = null;
    this.startGame();
  }

  getMarkup() {
    return `
      <header class="header">
        ${this.header.getMarkup()}
      </header>
      <div class="game">
        ${this.question.getMarkup()}
        ${this.statistics.getMarkup()}
      </div>
    `;
  }

  bindHandlers() {
    const answers = this.element.querySelector('.game__content');

    answers.onclick = (e) => {
      const answer = e.target.closest('.game__answer') || e.target.closest('.game__option');

      if (answer) {
        this.handleAnswer(answer, answers);
      }
    };
  }

  startGame() {
    this._interval = setInterval(() => {
      if (gameModel.state.time === 0) {
        this.changeQuestion(ANSWER_TYPE.WRONG);
      } else {
        gameModel.tick();
        this.updateHeader();
      }
    }, 1000);
  }

  changeQuestion(answerType) {
    clearInterval(this._interval);
    gameModel.setAnswer(answerType);

    if (answerType === ANSWER_TYPE.WRONG) {
      gameModel.reduceLives();
    }

    if (gameModel.isNextQuestionAvailable()) {
      gameModel.initTime();
      gameModel.nextQuestion();
      renderSlide(new GameView().element);
    } else {
      renderSlide(new StatsView(gameModel.finish()).element);
    }
  }

  updateHeader() {
    this.header.update(gameModel.state);
    const headerElement = this.element.querySelector('.header');
    headerElement.innerHTML = this.header.getMarkup();
  }

  handleAnswer(element, container) {
    switch (this.currentQuestionContent.type) {
      case 'triple':
        this.tripleAnswerHandler(element, container);
        break;
      default:
        this.singleAnswerHandler(container);
        break;
    }
  }

  singleAnswerHandler(container) {
    const radios = Array.from(container.querySelectorAll('input[type="radio"]:checked'));

    if (radios.length < gameModel.state.questions[this.currentQuestion].options.length) {
      return;
    }

    const isAnswerCorrect = () => {
      return radios.every((radio, index) => {
        return radio.value === this.currentQuestionContent.options[index].answer;
      });
    };

    this.changeQuestion(isAnswerCorrect() ? setAnswerType(gameModel.state.time) : ANSWER_TYPE.WRONG);
  }

  tripleAnswerHandler(element, container) {
    const options = Array.from(container.querySelectorAll('.game__option'));

    const isAnswerCorrect = () => {
      let isCorrect;

      options.forEach((option, index) => {
        if (option === element) {
          isCorrect = this.currentQuestionContent.options[index].isAnswer;
        }
      });

      return isCorrect;
    };

    this.changeQuestion(isAnswerCorrect() ? setAnswerType(gameModel.state.time) : ANSWER_TYPE.WRONG);
  }
}

export default () => new GameView().element;
