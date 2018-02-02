import { fromJS } from 'immutable';

// Types

export const types = {
  SET_RECOMMENDED: 'review/SET_RECOMMENDED'
};

// Reducer

export const INITIAL_STATE = fromJS({
  recommended: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_RECOMMENDED:
      return state.set('recommended', action.payload);
    default:
      return state;
  }
}

// Actions

const setRecommended = bool => ({
  type: types.SET_RECOMMENDED,
  payload: bool
});

export const actions = {
  setRecommended
};

// Selectors

const getRecommended = state => state.get('recommended');

export const selectors = {
  getRecommended
};
