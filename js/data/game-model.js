import {
  initialGame,
  initGame,
  setTime,
  setLives,
  hasQuestion,
  setCurrentQuestion,
  getQuestion,
  setStats,
  isGameOver,
  initStats
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

  isNextQuestionAvailable() {
    return (this._state.question < this.state.questions.length) &&
            hasQuestion(this._state.question + 1) &&
            !isGameOver(this._state);
  }

  nextQuestion() {
    this._state = setCurrentQuestion(this._state, this._state.question + 1);
  }

  getQuestionContent() {
    return getQuestion(this._state.question);
  }

  reduceLives() {
    this._state = setLives(this._state, this._state.lives - 1);
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

  finish() {
    return initStats(this._state);
  }
}

export default new GameModel();
