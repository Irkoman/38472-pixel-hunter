const mainElement = document.getElementById('main');

const renderSlide = (slide) => {
  mainElement.innerHTML = '';
  mainElement.appendChild(slide);
};

export default renderSlide;
