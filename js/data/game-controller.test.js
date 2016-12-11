import assert from 'assert';
import {counters, questions} from './game-data';
import {setTime, setLives, setCurrentQuestion, getQuestion} from './game-controller';

describe('Game parameters', () => {
  describe('Time', () => {
    describe('Setting', () => {
      it('Time successfully changes', () => {
        assert.equal(setTime(counters, 10).time, 10);
      });
    });
    describe('Failure', () => {
      it('setTime throws an error if negative value passed', () => {
        assert.throws(() => {
          setTime(counters, -1);
        });
      });
      it('Value should be < 30, otherwise setTime throws an error', () => {
        assert.throws(() => {
          setTime(counters, 31);
        });
      });
    });
  });

  describe('Player\'s lives', () => {
    describe('Setting', () => {
      it('Number of player\'s lives successfully changes', () => {
        assert.equal(setLives(counters, 3).lives, 3);
      });
    });
    describe('Failure', () => {
      it('setLives throws an error if negative value passed', () => {
        assert.throws(() => {
          setLives(counters, -1);
        });
      });
      it('Value should be < 3, otherwise setLives throws an error', () => {
        assert.throws(() => {
          setLives(counters, 4);
        });
      });
    });
  });

  describe('Current question', () => {
    describe('Setting', () => {
      it('Current question successfully changes', () => {
        assert.equal(setCurrentQuestion(counters, 1).question, 1);
      });
    });
    describe('Getting', () => {
      it('We can successfully get question, if it is contained in game-data', () => {
        assert.equal(getQuestion(5), questions[4]);
      });
    });
  });
});
