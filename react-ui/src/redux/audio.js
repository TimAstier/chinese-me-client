import { fromJS } from 'immutable';

// Types

export const types = {
  SET: 'audio/SET',
  TOGGLE_SLOW: 'audio/TOGGLE_SLOW',
  START_LOADING: 'audio/START_LOADING',
  LOADING_SUCCESS: 'audio/LOADING_SUCCESS'
};

// Reducer

export const INITIAL_STATE = fromJS({
  isPlaying: false,
  audioUrl: '',
  slow: false, // example sentences are first played in normal speed
  lastOrigin: '',
  isLoading: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET:
      return state.set(action.payload.attribute, action.payload.value);
    case types.TOGGLE_SLOW:
      return state.set('slow', !state.get('slow'));
    case types.START_LOADING:
      return state.set('isLoading', true);
    case types.LOADING_SUCCESS:
      return state.set('isLoading', false);
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

const startLoading = () => ({
  type: types.START_LOADING
});

const loadingSuccess = () => ({
  type: types.LOADING_SUCCESS
});

export const actions = {
  set,
  toggleSlow,
  startLoading,
  loadingSuccess
};

// Selectors

const getIsPlaying = state => state.get('isPlaying');
const getAudioUrl = state => state.get('audioUrl');
const getSlow = state => state.get('slow');
const getLastOrigin = state => state.get('lastOrigin');
const getIsLoading = state => state.get('isLoading');

export const selectors = {
  getIsPlaying,
  getAudioUrl,
  getSlow,
  getLastOrigin,
  getIsLoading
};
