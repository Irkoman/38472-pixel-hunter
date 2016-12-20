import AbstractView from '../view';
import renderSlide from '../render-slide';
import rules from './rules';

class GreetingView extends AbstractView {
  getMarkup() {
    return `
      <div class="greeting  central--blur">
        <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
        <h1 class="greeting__asterisk">*</h1>
        <div class="greeting__challenge">
          <h3>Лучшие художники-фотореалисты<br>бросают тебе вызов!</h3>
          <p>Правила игры просты.<br>Нужно отличить рисунок от фотографии и сделать выбор.<br>Задача кажется тривиальной, но не думай, что все так просто.<br>Фотореализм обманчив и коварен.<br>Помни: главное — смотреть очень внимательно.</p>
        </div>
        <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
      </div>
    `;
  }

  bindHandlers() {
    const greetingContinue = this.element.querySelector('.greeting__continue');

    greetingContinue.onclick = (e) => {
      e.preventDefault();
      renderSlide(rules());
    };
  }
}

export default () => new GreetingView().element;
