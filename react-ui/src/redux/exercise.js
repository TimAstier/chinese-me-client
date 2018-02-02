import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Types

export const types = {
  SET_STATUS: 'exercise/SET_STATUS',
  SET_USER_ANSWER: 'exercise/SET_USER_ANSWER',
  SET_USER_CHOICE: 'exercise/SET_USER_CHOICE',
  PUSH_INDEX: 'exercise/PUSH_INDEX',
  REMOVE_INDEX: 'exercise/REMOVE_INDEX',
  SET_ATTEMPTS_LEFT: 'exercise/SET_ATTEMPTS_LEFT',
  SET_CURRENT_BOX_INDEX: 'exercise/SET_CURRENT_BOX_INDEX',
  ADD_RESULT: 'exercise/ADD_RESULT',
  INIT: 'exercise/INIT'
};

// Reducer

export const INITIAL_STATE = fromJS({
  status: 'question',
  userAnswer: '',
  userChoice: null,
  attemptsLeft: 2,
  currentBoxIndex: 0,
  results: [], // [{ success: false, userAnswer: 'de' }, { success: true, userAnswer: 'ta1' }]
  indexes: []
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_STATUS:
      return state.set('status', action.payload.status);
    case types.SET_USER_ANSWER:
      return state.set('userAnswer', action.payload.userAnswer);
    case types.SET_USER_CHOICE:
      if (action.payload.allowChange === false && state.get('userChoice') !== null) {
        // Avoids setting another userChoice when already set
        // This is done here because we can't easily update multipleChoices
        // as they are rendered only once after randomizing choice orders
        return state;
      }
      return state.set('userChoice', action.payload.userChoice);
    case types.PUSH_INDEX:
      return state.set('indexes', state.get('indexes').push(action.payload.index));
    case types.REMOVE_INDEX:
      return state.set('indexes', state.get('indexes').splice(state.get('indexes').indexOf(action.payload.index), 1));
    case types.SET_ATTEMPTS_LEFT:
      return state.set('attemptsLeft', action.payload);
    case types.SET_CURRENT_BOX_INDEX:
      return state.set('currentBoxIndex', action.payload.index);
    case types.ADD_RESULT:
      return state.set('results', state.get('results').push(fromJS(action.payload.result)));
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

const setUserChoice = (userChoice, allowChange) => ({
  type: types.SET_USER_CHOICE,
  payload: { userChoice, allowChange }
});

const pushIndex = index => ({
  type: types.PUSH_INDEX,
  payload: { index }
});

const removeIndex = index => ({
  type: types.REMOVE_INDEX,
  payload: { index }
});

const init = () => ({ type: types.INIT });

const setAttemptsLeft = number => ({
  type: types.SET_ATTEMPTS_LEFT,
  payload: number
});

const setCurrentBoxIndex = index => ({
  type: types.SET_CURRENT_BOX_INDEX,
  payload: { index }
});

const addResult = result => ({
  type: types.ADD_RESULT,
  payload: { result }
});

export const actions = {
  setStatus,
  setUserAnswer,
  setUserChoice,
  pushIndex,
  removeIndex,
  init,
  setAttemptsLeft,
  setCurrentBoxIndex,
  addResult
};

// Selectors

const getStatus = state => state.get('status');
const getUserAnswer = state => state.get('userAnswer');
const getUserChoice = state => state.get('userChoice');
const getIndexes = state => state.get('indexes');
const getAttemptsLeft = state => state.get('attemptsLeft');
const getCurrentBoxIndex = state => state.get('currentBoxIndex');
const getResults = state => state.get('results');
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
  getStatus,
  getUserAnswer,
  getUserChoice,
  getIndexes,
  getAttemptsLeft,
  getCurrentBoxIndex,
  getResults,
  getSuccess
};
