import { fromJS } from 'immutable';

// Action Types

export const types = {
  SET: 'audio/SET',
  PLAY_SENTENCE: 'audio/PLAY_SENTENCE'
};

// Reducer

export const INITIAL_STATE = fromJS({
  isPlaying: false
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
const playSentence = () => ({ type: types.PLAY_SENTENCE });

export const actions = {
  set,
  playSentence
};

// Selectors

const getSrc = state => state.get('src');
const getIsPlaying = state => state.get('isPlaying');

export const selectors = {
  getSrc,
  getIsPlaying
};
