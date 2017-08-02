import { Map } from 'immutable';

// Action Types

export const types = {
  SET_STATUS: 'characterPinyin/SET_STATUS',
  SET_ATTEMPTS_LEFT: 'characterPinyin/SET_ATTEMPTS_LEFT',
  SET_USER_ANSWER: 'characterPinyin/SET_USER_ANSWER'
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
    default: return state;
  }
}

// Action Creators

const setStatus = string => ({
  type: types.SET_STATUS,
  payload: string
});

const setAttemptsLeft = number => ({
  type: types.SET_ATTEMPTS_LEFT,
  payload: number
});

const setUserAnswer = answer => {
  return {
    type: types.SET_USER_ANSWER,
    payload: answer
  };
};

export const actions = {
  setStatus,
  setAttemptsLeft,
  setUserAnswer
};

// Selectors

const getCharacterPinyinStatus = state => state.get('status');
const getCharacterPinyinAttemptsLeft = state => state.get('attemptsLeft');
const getCharacterPinyinUserAnswer = state => state.get('userAnswer');

export const selectors = {
  getCharacterPinyinStatus,
  getCharacterPinyinAttemptsLeft,
  getCharacterPinyinUserAnswer
};
