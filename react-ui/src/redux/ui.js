import { Map } from 'immutable';

// Action types

export const types = {
  SET: 'ui/SET'
};

// Reducer
export const INITIAL_STATE = Map({
  nextButton: true,
  isAudioPlaying: false,
  skipButton: true
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET:
      return state.set(action.payload.attribute, action.payload.value);
    default: return state;
  }
}

// Action Creators

const set = (attribute, value) => ({
  type: types.SET,
  payload: { attribute, value }
});

export const actions = {
  set
};

// Selectors

const getNextButton = state => state.get('nextButton');
const getIsAudioPlaying = state => state.get('isAudioPlaying');
const getSkipButton = state => state.get('skipButton');

export const selectors = {
  getNextButton,
  getIsAudioPlaying,
  getSkipButton
};
