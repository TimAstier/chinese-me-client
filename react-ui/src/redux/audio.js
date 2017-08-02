import { fromJS } from 'immutable';

// Action Types

export const types = {
  SET: 'audio/SET'
};

// Reducer

export const INITIAL_STATE = fromJS({
  isPlaying: false,
  audioUrl: ''
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

const getIsPlaying = state => state.get('isPlaying');
const getAudioUrl = state => state.get('audioUrl');

export const selectors = {
  getIsPlaying,
  getAudioUrl
};
