import renderSlide from './render-slide';
import {introData} from '../data/static-data';
import intro from './intro';

(function () {
  renderSlide(intro(introData));
})();
