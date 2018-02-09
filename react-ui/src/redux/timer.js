import Immutable from 'immutable';
import { createSelector } from 'reselect';
import { EXAM_TIME } from '../constants/exam.js';

// Types

export const types = {
  START: 'timer/START',
  STOP: 'timer/STOP',
  TICK: 'timer/TICK',
  RESET: 'timer/RESET',
  OUT_OF_TIME: 'timer/OUT_OF_TIME'
};

// Reducer

const INITIAL_STATE = Immutable.Map({
  status: 'stopped',
  time: EXAM_TIME
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.START:
      return state.set('status', 'running');
    case types.STOP:
    case types.OUT_OF_TIME:
      return state.set('status', 'stopped');
    case types.TICK:
      return state.set('time', state.get('time') - 1);
    case types.RESET:
      return INITIAL_STATE;
    default: return state;
  }
}

// Actions

const start = () => ({ type: types.START });
const stop = () => ({ type: types.STOP });
const tick = () => ({ type: types.TICK });
const reset = () => ({ type: types.RESET });
const outOfTime = () => ({ type: types.OUT_OF_TIME });

export const actions = {
  start,
  stop,
  tick,
  reset,
  outOfTime
};

// Selectors

const getStatus = state => state.get('status');
const getTime = state => state.get('time');
const getTimeLeft = createSelector(
  getTime,
  time => time / INITIAL_STATE.get('time')
);
const getTimeLabel = createSelector(
  getTime,
  time => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  }
);

export const selectors = {
  getStatus,
  getTime,
  getTimeLeft,
  getTimeLabel
};
