import Application from '../application';
import HeaderView from './components/header';
import LevelView from './components/level';
import gameModel from '../data/game-model';
import {Answer} from '../data/game-controller';

class GamePresenter {
  constructor() {
    this.header = new HeaderView(gameModel.state);
    this.content = new LevelView(gameModel.state, gameModel.getLevelContent());

    this.root = document.createElement('div');
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this._interval = null;
  }

  startGame() {
    this.changeLevel();

    this._interval = setInterval(() => {
      if (gameModel.state.time === 0) {
        this.answer(false);
      } else {
        gameModel.tick();
        this.updateHeader();
      }
    }, 1000);
  }

  stopGame() {
    clearInterval(this._interval);
  }

  changeLevel() {
    if (!gameModel.hasLevel()) {
      Application.showStats(gameModel.saveStats());
      this.exit();
    }

    gameModel.initTime();
    this.updateHeader();

    const level = new LevelView(gameModel.state, gameModel.getLevelContent());
    level.onAnswer = this.answer.bind(this);
    this.updateContent(level);
  }

  updateHeader() {
    const header = new HeaderView(gameModel.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  updateContent(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  answer(isCorrect) {
    this.stopGame();

    if (!isCorrect) {
      gameModel.reduceLives();
    }

    let answer = !isCorrect ? Answer.WRONG : gameModel.rateAnswer();

    gameModel.setAnswer(answer);
    gameModel.nextLevel();

    this.startGame();
  }

  exit() {
    this.stopGame();
    gameModel.restart();
  }
}

const game = new GamePresenter();

export default () => {
  gameModel.restart();
  game.startGame();
  return game.root;
};
