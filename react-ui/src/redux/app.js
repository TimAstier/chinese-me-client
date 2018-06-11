import { Map } from 'immutable';
import { EventTypes } from 'redux-segment';

// Types

export const types = {
  SET_INITIALIZED: 'app/SET_INITIALIZED'
};

// Reducer

const INITIAL_STATE = Map({
  initialized: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_INITIALIZED: return state.set('initialized', action.payload);
    default: return state;
  }
}

// Actions

const setInitialized = bool => {
  if (bool === false) {
    return {
      type: types.SET_INITIALIZED,
      payload: bool
    };
  }
  return {
    type: types.SET_INITIALIZED,
    payload: bool,
    meta: {
      analytics: {
        eventType: EventTypes.track,
        eventPayload: {
          event: 'Loaded App'
        }
      }
    }
  };
};

export const actions = {
  setInitialized
};

// Selectors

const getInitialized = state => state.get('initialized');

export const selectors = {
  getInitialized
};
