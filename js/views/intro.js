import AbstractView from '../view';
import renderSlide from '../render-slide';
import greeting from './greeting';

class IntroView extends AbstractView {
  getMarkup() {
    return `
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    `;
  }

  bindHandlers() {
    const introAsterisk = this.element.querySelector('.intro__asterisk');

    introAsterisk.addEventListener('click', () => renderSlide(greeting()));
  }
}

export default () => new IntroView().element;
