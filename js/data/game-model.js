import {
  initialGame,
  initGame,
  setTime,
  setLives,
  setCurrentQuestion,
  rateAnswerSpeed,
  setStats,
  isGameOver
} from './game-controller';
import 'whatwg-fetch';

export default class GameModel {
  constructor(username, data, state = initialGame) {
    this.data = data;
    this._state = state;
    this._state.username = username;
  }

  get state() {
    return this._state;
  }

  initTime() {
    this._state = setTime(this._state, 30);
  }

  nextLevel() {
    this._state = setCurrentQuestion(this._state, this._state.question + 1);
  }

  hasLevel() {
    return (this._state.question <= this.data.length) &&
      (typeof this.data[this._state.question] !== 'undefined') &&
      !isGameOver(this._state);
  }

  getLevelContent() {
    return this.data[this._state.question];
  }

  reduceLives() {
    this._state = setLives(this._state, this._state.lives - 1);
  }

  rateAnswer() {
    return rateAnswerSpeed(this._state.time);
  }

  setAnswer(answer) {
    this._state = setStats(this._state, answer);
  }

  restart() {
    this._state = initGame(initialGame);
  }

  tick() {
    this._state = setTime(this._state, this._state.time - 1);
  }
}
