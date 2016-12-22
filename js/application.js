import introView from './views/intro';
import greetingView from './views/greeting';
import rulesView from './views/rules';
import gamePresenter from './views/game';
import StatsView from './views/stats';

const main = document.getElementById('main');
const changeView = (element) => {
  main.innerHTML = '';
  main.appendChild(element);
};

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

  static showGame() {
    changeView(gamePresenter());
  }

  static showStats(stats) {
    changeView(new StatsView(stats).element);
  }
}
