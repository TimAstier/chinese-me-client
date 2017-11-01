import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Types

export const types = {
  SET_INITIALIZED: 'review/SET_INITIALIZED',
  SET_EXERCISES: 'review/SET_EXERCISES',
  CORRECT_ANSWER: 'review/CORRECT_ANSWER',
  WRONG_ANSWER: 'review/WRONG_ANSWER',
  CLEAN: 'review/CLEAN'
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
      return state.set('exercises', fromJS(action.payload.exercises));
    case types.CORRECT_ANSWER:
      return state.set('exercises', state.get('exercises').delete(0));
    case types.WRONG_ANSWER:
      return state.set('exercises',
        state.get('exercises').delete(0).push(state.get('exercises').get(0))
      );
    case types.CLEAN:
      return INITIAL_STATE;
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
const correctAnswer = () => ({ type: types.CORRECT_ANSWER });
const wrongAnswer = () => ({ type: types.WRONG_ANSWER });
const clean = () => ({ type: types.CLEAN });

export const actions = {
  setInitialized,
  setExercises,
  correctAnswer,
  wrongAnswer,
  clean
};

// Selectors

const getInitialized = state => state.get('initialized');
const getExercises = state => state.get('exercises');
const getCurrentExercise = createSelector(
  getExercises,
  exercises => {
    return exercises.get(0) ? exercises.get(0) : null;
  }
);

export const selectors = {
  getInitialized,
  getExercises,
  getCurrentExercise
};
