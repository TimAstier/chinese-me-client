import { fromJS } from 'immutable';

// Types

export const types = {
  SET: 'settings/SET',
  CLEAR: 'settings/CLEAR'
};

// Reducer

const INITIAL_STATE = fromJS({
  initialized: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET:
      return state.merge({
        initialized: true,
        ...action.payload.settings
      });
    case types.CLEAR:
      return INITIAL_STATE;
    default: return state;
  }
}

// Actions

const set = settings => ({
  type: types.SET,
  payload: { settings }
});

const clear = () => ({
  type: types.CLEAR
});

export const actions = {
  set,
  clear
};

// Selectors

const getInitialized = state => state.get('initialized');
const getSettings = state => state;

export const selectors = {
  getInitialized,
  getSettings
};
