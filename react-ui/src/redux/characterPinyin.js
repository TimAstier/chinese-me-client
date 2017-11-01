import { Map } from 'immutable';

// Types

export const types = {
  SET_STATUS: 'characterPinyin/SET_STATUS',
  SET_ATTEMPTS_LEFT: 'characterPinyin/SET_ATTEMPTS_LEFT',
  SET_USER_ANSWER: 'characterPinyin/SET_USER_ANSWER',
  INIT: 'characterPinyin/INIT'
};

// Reducer

const INITIAL_STATE = Map({
  status: 'question',
  attemptsLeft: 2,
  userAnswer: ''
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_STATUS:
      return state.set('status', action.payload);
    case types.SET_ATTEMPTS_LEFT:
      return state.set('attemptsLeft', action.payload);
    case types.SET_USER_ANSWER:
      return state.set('userAnswer', action.payload);
    case types.INIT:
      return INITIAL_STATE;
    default: return state;
  }
}

// Actions

const setStatus = string => ({
  type: types.SET_STATUS,
  payload: string
});

const setAttemptsLeft = number => ({
  type: types.SET_ATTEMPTS_LEFT,
  payload: number
});

const setUserAnswer = answer => ({
  type: types.SET_USER_ANSWER,
  payload: answer
});

const init = () => ({
  type: types.INIT
});

export const actions = {
  setStatus,
  setAttemptsLeft,
  setUserAnswer,
  init
};

// Selectors

const getStatus = state => state.get('status');
const getAttemptsLeft = state => state.get('attemptsLeft');
const getUserAnswer = state => state.get('userAnswer');

export const selectors = {
  getStatus,
  getAttemptsLeft,
  getUserAnswer
};
