import { fromJS } from 'immutable';

// Types

export const types = {
  SET_WATCH_AGAIN: 'hanzi/SET_WATCH_AGAIN',
  SET_ANIMATION_ID: 'hanzi/SET_ANIMATION_ID'
};

// Reducer

export const INITIAL_STATE = fromJS({
  watchAgain: false,
  animationId: ''
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_WATCH_AGAIN:
      return state.set('watchAgain', action.payload);
    case types.SET_ANIMATION_ID:
      return state.set('animationId', action.payload.id);
    default:
      return state;
  }
}

// Actions

const setWatchAgain = bool => ({
  type: types.SET_WATCH_AGAIN,
  payload: bool
});

const setAnimationId = id => ({
  type: types.SET_ANIMATION_ID,
  payload: { id }
});

export const actions = {
  setWatchAgain,
  setAnimationId
};

// Selectors

const getWatchAgain = state => state.get('watchAgain');
const getAnimationId = state => state.get('animationId');

export const selectors = {
  getWatchAgain,
  getAnimationId
};
