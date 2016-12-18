import getElementFromTemplate from './get-element-from-template';
import renderSlide from './render-slide';
import {setTime, setLives, setCurrentQuestion, getQuestion, setAnswerType, ANSWER_TYPE, setStats, isGameOver, initStats} from './data/game-controller';
import {header, updateHeader} from './components/header';
import statistics from './components/statistics';
import question from './components/question';
import stats from './stats';

let interval = null;

const changeQuestion = (data, answerType) => {
  data = setStats(data, answerType);

  if (answerType === ANSWER_TYPE.WRONG) {
    data = setLives(data, data.lives - 1);
  }

  data = setCurrentQuestion(data, data.question + 1);
  clearInterval(interval);

  let isNextQuestionAvailable = data.question < data.questions.length && !isGameOver(data);

  if (isNextQuestionAvailable) {
    renderSlide(game(setTime(data, 30)));
  } else {
    renderSlide(stats(initStats(data)));
  }
};

const handleAnswer = (element, container, data) => {
  switch (getQuestion(data.question).type) {
    case 'triple':
      tripleAnswerHandler(element, container, data);
      break;
    default:
      singleAnswerHandler(container, data);
      break;
  }
};

const singleAnswerHandler = (container, data) => {
  const radios = Array.from(container.querySelectorAll('input[type="radio"]:checked'));

  if (radios.length < data.questions[data.question].options.length) {
    return;
  }

  const isAnswerCorrect = () => {
    return radios.every((radio, index) => {
      return radio.value === getQuestion(data.question).options[index].answer;
    });
  };

  changeQuestion(data, isAnswerCorrect() ? setAnswerType(data.time) : ANSWER_TYPE.WRONG);
};

const tripleAnswerHandler = (element, container, data) => {
  const options = Array.from(container.querySelectorAll('.game__option'));

  const isAnswerCorrect = () => {
    let isCorrect;

    options.forEach((option, index) => {
      if (option === element) {
        isCorrect = getQuestion(data.question).options[index].isAnswer;
      }
    });

    return isCorrect;
  };

  changeQuestion(data, isAnswerCorrect() ? setAnswerType(data.time) : ANSWER_TYPE.WRONG);
};

const game = (data) => {
  interval = setInterval(() => {
    if (data.time === 0 ) {
      changeQuestion(data, ANSWER_TYPE.WRONG);
    } else {
      data = setTime(data, data.time - 1);
      updateHeader(header(data));
    }
  }, 1000);

  const template = `
    <header class="header">
      ${header(data)}
    </header>
    <div class="game">
      ${question(getQuestion(data.question))}
      ${statistics(data)}
    </div>
  `;

  const gameElement = getElementFromTemplate(template);
  const answers = gameElement.querySelector('.game__content');

  answers.onclick = (e) => {
    const answer = e.target.closest('.game__answer') || e.target.closest('.game__option');

    if (answer) {
      handleAnswer(answer, answers, data);
    }
  };

  return gameElement;
};

export default game;
