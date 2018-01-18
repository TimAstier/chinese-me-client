import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Types

export const types = {
  SET_USER_ANSWER: 'audioToWords/SET_USER_ANSWER',
  SET_CURRENT_BOX_INDEX: 'audioToWords/SET_CURRENT_BOX_INDEX',
  ADD_RESULT: 'audioToWords/ADD_RESULT',
  SET_STATUS: 'audioToWords/SET_STATUS',
  INIT: 'audioToWords/INIT'
};

// Reducer

export const INITIAL_STATE = fromJS({
  userAnswer: '',
  currentBoxIndex: 0,
  status: 'question', // ['question', 'finished']
  // results: [{ success: false, userAnswer: 'de' }, { success: true, userAnswer: 'ta1' }]
  results: []
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_USER_ANSWER:
      return state.set('userAnswer', action.payload.userAnswer);
    case types.SET_CURRENT_BOX_INDEX:
      return state.set('currentBoxIndex', action.payload.index);
    case types.ADD_RESULT:
      return state.set('results', state.get('results').push(fromJS(action.payload.result)));
    case types.SET_STATUS:
      return state.set('status', action.payload.status);
    case types.INIT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

// Actions

const setUserAnswer = userAnswer => ({
  type: types.SET_USER_ANSWER,
  payload: { userAnswer }
});

const setCurrentBoxIndex = index => ({
  type: types.SET_CURRENT_BOX_INDEX,
  payload: { index }
});

const addResult = result => ({
  type: types.ADD_RESULT,
  payload: { result }
});

const setStatus = status => ({
  type: types.SET_STATUS,
  payload: { status }
});

const init = () => ({ type: types.INIT });

export const actions = {
  setUserAnswer,
  setCurrentBoxIndex,
  addResult,
  setStatus,
  init
};

// Selectors

const getUserAnswer = state => state.get('userAnswer');
const getCurrentBoxIndex = state => state.get('currentBoxIndex');
const getResults = state => state.get('results');
const getStatus = state => state.get('status');
const getSuccess = createSelector(
  getResults,
  results => {
    const wrongAnswersCount = results.filter(result => {
      return result.get('success') === false;
    }).size;
    return wrongAnswersCount === 0; // Correct only if no wrong answers
  }
);

export const selectors = {
  getUserAnswer,
  getCurrentBoxIndex,
  getResults,
  getStatus,
  getSuccess
};