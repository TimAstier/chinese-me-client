import { fromJS } from 'immutable';

// Types

export const types = {
  SET_USER_ANSWER: 'audioToText/SET_USER_ANSWER',
  SET_CURRENT_BOX_INDEX: 'audioToText/SET_CURRENT_BOX_INDEX'
};

// Reducer

export const INITIAL_STATE = fromJS({
  userAnswer: '',
  currentBoxIndex: 0
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_USER_ANSWER:
      return state.set('userAnswer', action.payload.userAnswer);
    case types.SET_CURRENT_BOX_INDEX:
      return state.set('currentBoxIndex', action.payload.index);
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

export const actions = {
  setUserAnswer,
  setCurrentBoxIndex
};

// Selectors

const getAudioToTextUserAnswer = state => state.get('userAnswer');
const getCurrentBoxIndex = state => state.get('currentBoxIndex');

export const selectors = {
  getAudioToTextUserAnswer,
  getCurrentBoxIndex
};
