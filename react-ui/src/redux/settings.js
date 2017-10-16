import { fromJS } from 'immutable';

// Types

export const types = {
  SET: 'settings/SET'
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
    default: return state;
  }
}

// Actions

const set = settings => ({
  type: types.SET,
  payload: { settings }
});

export const actions = {
  set
};

// Selectors

const getSettingsInitialized = state => state.get('initialized');
const getSettings = state => state;

export const selectors = {
  getSettingsInitialized,
  getSettings
};
