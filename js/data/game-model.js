import {
  initialGame,
  initGame,
  setTime,
  setLives,
  hasQuestion,
  setCurrentQuestion,
  getQuestion,
  rateAnswerSpeed,
  setStats,
  isGameOver,
  initStats,
  generalStats
} from './game-controller';

class GameModel {
  constructor(state = initialGame) {
    this._state = state;
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
    return (this._state.question <= this.state.questions.length) &&
      hasQuestion(this._state.question) &&
      !isGameOver(this._state);
  }

  getLevelContent() {
    return getQuestion(this._state.question);
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
    initStats(initialGame);
  }

  tick() {
    this._state = setTime(this._state, this._state.time - 1);
  }

  saveStats() {
    generalStats.unshift(initStats(this._state));
    generalStats.pop();
    return generalStats;
  }
}

export default new GameModel();
