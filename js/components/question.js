export default (data) => {
  switch (data.options.length) {
    case 1:
      return `<p class="game__task">${data.task}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${data.options[0].image}" alt="Option 1" width="705" height="455">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>`;

    case 2:
      return `<p class="game__task">${data.task}</p>
        <form class="game__content">
          ${data.options.map((option, index) => `
            <div class="game__option">
              <img src="${option.image}" alt="Option ${index + 1}" width="468" height="458">
              <label class="game__answer  game__answer--photo">
                <input name="question${index + 1}" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--paint">
                <input name="question${index + 1}" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
          `).join('')}
        </form>`;

    default:
      return `<p class="game__task">${data.task}</p>
        <form class="game__content  game__content--triple">
          ${data.options.map((option, index) => `
            <div class="game__option">
              <img src="${option.image}" alt="Option ${index + 1}" width="304" height="455">
            </div>
          `).join('')}
        </form>`;
  }
};
