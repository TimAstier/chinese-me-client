import { fromJS } from 'immutable';

// Types

export const types = {
  SET_USER_ANSWER: 'audioToText/SET_USER_ANSWER',
  SET_CURRENT_BOX_INDEX: 'audioToText/SET_CURRENT_BOX_INDEX',
  ADD_RESULT: 'audioToText/ADD_RESULT',
  SET_STATUS: 'audioToText/SET_STATUS',
  INIT: 'audioToText/INIT'
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
      return state.set('results', state.get('results').push(action.payload.result));
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

const getAudioToTextUserAnswer = state => state.get('userAnswer');
const getCurrentBoxIndex = state => state.get('currentBoxIndex');
const getAudioToTextResults = state => state.get('results');
const getAudioToTextStatus = state => state.get('status');

export const selectors = {
  getAudioToTextUserAnswer,
  getCurrentBoxIndex,
  getAudioToTextResults,
  getAudioToTextStatus
};
