import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import greeting from './greeting';

const template = `
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
    Sparnaay.</p>
  </div>
`;

const intro = getElementFromTemplate(template);

let introAsterisk = intro.querySelector('.intro__asterisk');

introAsterisk.onclick = () => {
  renderSlide(greeting);
};

export default intro;
