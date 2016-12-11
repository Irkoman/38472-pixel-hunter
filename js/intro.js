import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import {greetingData} from './data/static-data';
import greeting from './greeting';

export default (data) => {
  const template = `
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup>${data.note}</p>
    </div>
  `;

  const intro = getElementFromTemplate(template);
  let introAsterisk = intro.querySelector('.intro__asterisk');

  introAsterisk.onclick = () => {
    renderSlide(greeting(greetingData));
  };

  return intro;
};
