import { fromJS } from 'immutable';

// Types

export const types = {
  SET_STATUS: 'multipleChoice/SET_STATUS',
  SET_USER_ANSWER: 'multipleChoice/SET_USER_ANSWER',
  INIT: 'multipleChoice/INIT'
};

// Reducer

export const INITIAL_STATE = fromJS({
  status: 'question',
  userAnswer: null,
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_STATUS:
      return state.set('status', action.payload.status);
    case types.SET_USER_ANSWER:
      return state.set('userAnswer', action.payload.userAnswer);
    case types.INIT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

// Actions

const setStatus = status => ({
  type: types.SET_STATUS,
  payload: { status }
});

const setUserAnswer = userAnswer => ({
  type: types.SET_USER_ANSWER,
  payload: { userAnswer }
});

const init = () => ({ type: types.INIT });

export const actions = {
  setStatus,
  setUserAnswer,
  init
};

// Selectors

const getStatus = state => state.get('status');
const getUserAnswer = state => state.get('userAnswer');

export const selectors = {
  getStatus,
  getUserAnswer
};
