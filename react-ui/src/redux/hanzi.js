import { fromJS } from 'immutable';

// Types

export const types = {
  SET_WATCH_AGAIN: 'hanzi/SET_WATCH_AGAIN',
};

// Reducer

export const INITIAL_STATE = fromJS({
  watchAgain: false,
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_WATCH_AGAIN:
      return state.set('watchAgain', action.payload);
    default:
      return state;
  }
}

// Actions

const setWatchAgain = bool => ({
  type: types.SET_WATCH_AGAIN,
  payload: bool
});

export const actions = {
  setWatchAgain
};

// Selectors

const getWatchAgain = state => state.get('watchAgain');

export const selectors = {
  getWatchAgain
};
