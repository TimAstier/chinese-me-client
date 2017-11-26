import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Types

export const types = {
  SET_INITIALIZED: 'practice/SET_INITIALIZED',
  SET_EXERCISES: 'practice/SET_EXERCISES',
  CORRECT_ANSWER: 'practice/CORRECT_ANSWER',
  WRONG_ANSWER: 'practice/WRONG_ANSWER',
  CLEAN: 'practice/CLEAN',
  SET_TOTAL: 'practice/SET_TOTAL'
};

// Reducer

export const INITIAL_STATE = fromJS({
  initialized: false,
  exercises: [], // [ { type, id } ],
  total: null
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
    case types.SET_TOTAL:
      return state.set('total', action.payload.total);
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
const setTotal = total => ({
  type: types.SET_TOTAL,
  payload: { total }
});

export const actions = {
  setInitialized,
  setExercises,
  correctAnswer,
  wrongAnswer,
  clean,
  setTotal
};

// Selectors

const getInitialized = state => state.get('initialized');
const getExercises = state => state.get('exercises');
const getExercisesSize = createSelector(
  getExercises,
  exercises => exercises.size
);
const getTotal = state => state.get('total');
const getCurrentExercise = createSelector(
  getExercises,
  exercises => {
    return exercises.get(0) ? exercises.get(0) : null;
  }
);
const getPracticeCompletion = createSelector(
  getExercisesSize,
  getTotal,
  (size, total) => (size && total) ? (total - size) / (total - 1) * 100 : 0
);

export const selectors = {
  getInitialized,
  getExercises,
  getExercisesSize,
  getTotal,
  getCurrentExercise,
  getPracticeCompletion
};
