import { fromJS } from 'immutable';

// Types

export const types = {
  SET_INITIALIZED: 'book/SET_INITIALIZED'
};

// Reducer

export const INITIAL_STATE = fromJS({
  initialized: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_INITIALIZED:
      return state.set('initialized', action.payload.initialized);
    default: return state;
  }
}

// Actions

const setInitialized = initialized => ({
  type: types.SET_INITIALIZED,
  payload: { initialized }
});

export const actions = {
  setInitialized
};

// Selectors

const getInitialized = state => state.get('initialized');

export const selectors = {
  getInitialized
};
