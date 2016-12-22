import Application from '../application';
import HeaderView from './components/header';
import LevelView from './components/level';
import GameModel from '../data/game-model';
import {Answer} from '../data/game-controller';

class GamePresenter {
  constructor(model) {
    this.model = model;
    this.content = new LevelView(this.model.state, this.model.getLevelContent());
    this.header = new HeaderView(this.model.state);
    this.root = document.createElement('div');
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this._interval = null;
  }

  startGame() {
    this.changeLevel();

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();

      if (this.model.state.time === 0) {
        this.answer(false);
      }
    }, 1000);
  }

  stopGame() {
    clearInterval(this._interval);
  }

  changeLevel() {
    if (!this.model.hasLevel()) {
      Application.showStats(this.model.saveStats());
      this.exit();
    }

    this.model.initTime();
    this.updateHeader();

    const level = new LevelView(this.model.state, this.model.getLevelContent());
    level.onAnswer = this.answer.bind(this);
    this.updateContent(level);
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    header.onBackClick = this.onBack.bind(this);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  updateContent(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  answer(isCorrect) {
    if (!isCorrect) {
      this.model.reduceLives();
      this.model.setAnswer(Answer.WRONG);
    } else {
      this.model.setAnswer(this.model.rateAnswer());
    }

    this.model.nextLevel();
    this.changeLevel();
  }

  onBack() {
    this.exit();
    Application.showRules();
  }

  exit() {
    this.stopGame();
    this.model.restart();
  }
}

export default () => {
  const game = new GamePresenter(new GameModel());
  game.startGame();
  return game.root;
};
