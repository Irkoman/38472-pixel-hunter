const mainElement = document.getElementById('main');

export default function (slide) {
  mainElement.innerHTML = '';
  mainElement.appendChild(slide);
}
