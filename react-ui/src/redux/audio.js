import { fromJS } from 'immutable';

// Types

export const types = {
  SET: 'audio/SET',
  TOGGLE_SLOW: 'audio/TOGGLE_SLOW'
};

// Reducer

export const INITIAL_STATE = fromJS({
  isPlaying: false,
  audioUrl: '',
  slow: false, // example sentences are first played in normal speed
  lastOrigin: ''
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET:
      return state.set(action.payload.attribute, action.payload.value);
    case types.TOGGLE_SLOW:
      return state.set('slow', !state.get('slow'));
    default: return state;
  }
}

// Actions

const set = (attribute, value) => ({
  type: types.SET,
  payload: { attribute, value }
});

const toggleSlow = () => ({
  type: types.TOGGLE_SLOW
});

export const actions = {
  set,
  toggleSlow
};

// Selectors

const getIsPlaying = state => state.get('isPlaying');
const getAudioUrl = state => state.get('audioUrl');
const getSlow = state => state.get('slow');
const getLastOrigin = state => state.get('lastOrigin');

export const selectors = {
  getIsPlaying,
  getAudioUrl,
  getSlow,
  getLastOrigin
};
