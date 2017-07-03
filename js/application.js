import introView from './views/intro';
import greetingView from './views/greeting';
import rulesView from './views/rules';
import statsView from './views/stats';
import saveView from './views/save';
import errorView from './views/error';
import gamePresenter from './views/game';

const main = document.getElementById('main');
const changeView = (element) => {
  main.innerHTML = '';
  main.appendChild(element);
};

let gameData;

export default class Application {
  static showIntro() {
    changeView(introView());
  }

  static showGreeting() {
    changeView(greetingView());
  }

  static showRules() {
    changeView(rulesView());
  }

  static showGame(username) {
    changeView(gamePresenter(username, gameData));
  }

  static showStats(stats) {
    changeView(statsView(stats));
  }

  static showError() {
    changeView(errorView());
  }

  static showSave() {
    changeView(saveView());
  }

  static set data(data) {
    gameData = data;
  }

  static checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }

  static saveStats(state) {
    const SERVER = 'https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats';

    this.showSave();

    window.fetch(`${SERVER}/${state.username}`, {
      method: 'POST',
      body: JSON.stringify({
        'stats': state.stats,
        'lives': state.lives
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).
        then(() => {
          return window.fetch(`${SERVER}/${state.username}`);
        }).
        then((response) => this.checkStatus(response)).
        then((response) => response.json()).
        then((data) => {
          this.showStats(data.reverse());
        }).
        catch(this.showError);
  }
}
