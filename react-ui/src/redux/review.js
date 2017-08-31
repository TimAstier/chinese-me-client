import { fromJS } from 'immutable';

// Types
export const types = {
  SET_INITIALIZED: 'review/SET_INITIALIZED',
  SET_EXERCISES: 'review/SET_EXERCISES'
};

// Reducer

export const INITIAL_STATE = fromJS({
  initialized: false,
  exercises: [] // [ { type, id } ]
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_INITIALIZED:
      return state.set('initialized', action.payload.initialized);
    case types.SET_EXERCISES:
      return state.set('exercises', action.payload.exercises);
    default:
      return state;
  }
}

// Actions

const setInitialized = initialized => ({
  type: types.SET_INITIALIZED,
  payload: { initialized }
});

const setExercises = exercises => ({
  type: types.SET_EXERCISES,
  payload: { exercises }
});

export const actions = {
  setInitialized,
  setExercises
};

// Selectors

const getReviewInitialized = state => state.get('initliazed');
const getReviewExercises = state => state.get('exercises');

export const selectors = {
  getReviewInitialized,
  getReviewExercises
};
