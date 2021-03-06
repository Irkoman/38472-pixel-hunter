import assert from 'assert';
import {
  initGame,
  initialGame,
  setTime,
  setLives,
  setCurrentQuestion,
  setStats,
  isGameOver,
  formatStats,
  setVerdict,
  computeScore,
  computeTotal,
  Answer,
  getLivesExtra,
  getFastExtra,
  getSlowExtra
} from './game-controller';

describe('Game initialization', () => {
  it('initGame correctly sets the game ', () => {
    assert.deepEqual(initGame(initialGame), initialGame);
  });
  it('initGame does not change original game if copy changed', () => {
    let copy = initGame(initialGame);
    copy.time = 25;
    assert.notDeepEqual(copy, initialGame);
  });
});

describe('Game parameters', () => {
  describe('Time', () => {
    describe('Setting', () => {
      it('Time successfully changes', () => {
        assert.equal(setTime(initialGame, 10).time, 10);
      });
    });
    describe('Failure', () => {
      it('setTime throws an error if negative value passed', () => {
        assert.throws(() => {
          setTime(initialGame, -1);
        });
      });
      it('Value should be < 30, otherwise setTime throws an error', () => {
        assert.throws(() => {
          setTime(initialGame, 31);
        });
      });
    });
  });

  describe('Player\'s lives', () => {
    describe('Setting', () => {
      it('Number of player\'s lives successfully changes', () => {
        assert.equal(setLives(initialGame, 3).lives, 3);
      });
    });
    describe('Failure', () => {
      it('setLives throws an error if negative value passed', () => {
        assert.throws(() => {
          setLives(initialGame, -1);
        });
      });
      it('Value should be < 3, otherwise setLives throws an error', () => {
        assert.throws(() => {
          setLives(initialGame, 4);
        });
      });
    });
  });

  describe('Current question', () => {
    describe('Setting', () => {
      it('Current question successfully changes', () => {
        assert.equal(setCurrentQuestion(initialGame, 1).question, 1);
      });
    });
    describe('Failure', () => {
      it('setCurrentQuestion throws an error if negative value passed', () => {
        assert.throws(() => {
          setCurrentQuestion(initialGame, -1);
        });
      });
      it('Value should not be greater than number of questions, otherwise setCurrentQuestion throws an error', () => {
        assert.throws(() => {
          setCurrentQuestion(initialGame, 11);
        });
      });
    });
  });

  describe('Stats', () => {
    it('setStats works correctly', () => {
      assert.equal(setStats(initialGame, 'fast').stats[5], initialGame.stats[5]);
    });
  });
});

describe('GameOver', () => {
  it('isGameOver returns false if lives > 0', () => {
    assert.equal(isGameOver(initialGame), false);
  });
  it('isGameOver returns true if lives === 0', () => {
    const game = Object.assign({}, initialGame, {lives: 0});
    assert.equal(isGameOver(game), true);
  });
});

const correctAnswers = Array.from(new Array(10), () => Answer.CORRECT);
const fastAnswers = Array.from(new Array(10), () => Answer.FAST);
const slowAnswers = Array.from(new Array(10), () => Answer.SLOW);
const extra = [
  {
    name: 'Бонус за скорость:',
    type: 'fast',
    amount: fastAnswers.length,
    points: '× 50',
    score: fastAnswers.length * 50
  }, {
    name: 'Штраф за медлительность:',
    type: 'slow',
    amount: slowAnswers.length,
    points: '× 50',
    score: slowAnswers.length * -50
  }
];

describe('Getting extra', () => {
  describe('Getting livesExtra', () => {
    it('getLivesExtra correctly works with lives > 0', (game = initGame(initialGame)) => {
      assert.equal(getLivesExtra(game).length, 1);
    });
    it('getLivesExtra correctly works with lives === 0', (game = initGame(initialGame)) => {
      game.lives = 0;
      assert.equal(getLivesExtra(game).length, 0);
    });
  });
  describe('Getting fastExtra', () => {
    it('getFastExtra is added if lives > 0 and there are fast answers in stats', (game = initGame(initialGame)) => {
      game.stats = fastAnswers;
      assert.equal(getFastExtra(game).length, 1);
    });
    it('getFastExtra is not added if there are no fast answers in stats', (game = initGame(initialGame)) => {
      game.stats = correctAnswers;
      assert.equal(getFastExtra(game).length, 0);
    });
    it('getFastExtra is not added if lives === 0', (game = initGame(initialGame)) => {
      game.lives = 0;
      assert.equal(getFastExtra(game).length, 0);
    });
  });
  describe('Getting slowExtra', () => {
    it('getSlowExtra is added if lives > 0 and there are slow answers in stats', (game = initGame(initialGame)) => {
      game.stats = slowAnswers;
      assert.equal(getSlowExtra(game).length, 1);
    });
    it('getSlowExtra is not added if there are no slow answers in stats', (game = initGame(initialGame)) => {
      assert.equal(getSlowExtra(game).length, 0);
    });
    it('getSlowExtra is not added if lives === 0', (game = initGame(initialGame)) => {
      game.lives = 0;
      assert.equal(getSlowExtra(game).length, 0);
    });
  });
});

describe('Stats initialization', () => {
  describe('Computing the score', () => {
    it('computeScore calculates total when lives === 3', (game = initGame(initialGame)) => {
      game.stats = correctAnswers;
      assert.equal(computeScore(game), 1000);
    });
    it('computeScore returns 0 if lives === 0', (game = initGame(initialGame)) => {
      game.lives = 0;
      assert.equal(computeScore(game), 0);
    });
  });
  describe('Computing the total', () => {
    it('computeTotal correctly calculates the total', () => {
      assert.equal(computeTotal(700, extra), 700);
    });
    it('computeTotal does not crash if extra is empty', () => {
      assert.equal(computeTotal(550, []), 550);
    });
  });
  describe('Initializing the stats', () => {
    it('formatStats correctly sets verdict', () => {
      assert.equal(setVerdict(initialGame.lives), formatStats(initialGame).verdict);
    });
    it('formatStats correctly sets answers', () => {
      assert.equal(formatStats(initialGame).answers, initialGame.stats);
    });
    it('formatStats correctly sets computed score', () => {
      assert.equal(formatStats(initialGame).score, computeScore(initialGame));
    });
  });
});
