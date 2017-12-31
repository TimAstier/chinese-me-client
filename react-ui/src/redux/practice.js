import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Types

export const types = {
  SET_INITIALIZED: 'practice/SET_INITIALIZED',
  SET_EXERCISES: 'practice/SET_EXERCISES',
  CORRECT_ANSWER: 'practice/CORRECT_ANSWER',
  WRONG_ANSWER: 'practice/WRONG_ANSWER',
  CLEAN: 'practice/CLEAN',
  SET_TOTAL: 'practice/SET_TOTAL',
  SET_CORRECT_ANSWER: 'practice/SET_CORRECT_ANSWER',
  SET_EXPLANATION: 'practice/SET_EXPLANATION'
};

// Reducer

export const INITIAL_STATE = fromJS({
  initialized: false,
  exercises: [], // [ { type, id } ],
  total: null,
  correctAnswer: null,
  explanation: null
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
    case types.SET_CORRECT_ANSWER:
      return state.set('correctAnswer', action.payload);
    case types.SET_EXPLANATION:
      return state.set('explanation', action.payload);
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
const setCorrectAnswer = correctAnswer => ({
  type: types.SET_CORRECT_ANSWER,
  payload: correctAnswer
});
const setExplanation = explanation => ({
  type: types.SET_EXPLANATION,
  payload: explanation
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
  setTotal,
  setCorrectAnswer,
  setExplanation
};

// Selectors

const getInitialized = state => state.get('initialized');
const getExercises = state => state.get('exercises');
const getCorrectAnswer = state => state.get('correctAnswer');
const getExplanation = state => state.get('explanation');
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
  (size, total) => (size && total) ? (total - size) / total * 100 : 100
);

export const selectors = {
  getInitialized,
  getExercises,
  getExercisesSize,
  getCorrectAnswer,
  getExplanation,
  getTotal,
  getCurrentExercise,
  getPracticeCompletion
};
