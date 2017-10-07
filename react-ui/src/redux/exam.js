import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Types

export const types = {
  SET_INITIALIZED: 'exam/SET_INITIALIZED',
  SET_EXERCISES: 'exam/SET_EXERCISES',
  CORRECT_ANSWER: 'exam/CORRECT_ANSWER',
  WRONG_ANSWER: 'exam/WRONG_ANSWER',
  CLEAN: 'exam/CLEAN'
};

// Reducer

export const INITIAL_STATE = fromJS({
  initialized: false,
  exercises: [], // [ { type, id } ] <- As in review
  results: []
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_INITIALIZED:
      return state.set('initialized', action.payload.initialized);
    case types.SET_EXERCISES:
      return state.set('exercises', fromJS(action.payload.exercises));
    case types.CORRECT_ANSWER:
      return state.set('results', state.get('results').push(1));
    case types.WRONG_ANSWER:
      return state.set('results', state.get('results').push(0));
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

const getExamInitialized = state => state.get('initialized');
const getExamExercises = state => state.get('exercises');
const getExamResults = state => state.get('results');
const getExamScore = createSelector(
  getExamResults,
  results => results.filter(e => e === 1).size
);
const getExamScoreMax = createSelector(
  getExamExercises,
  exercises => exercises.size
);
const getExamCurrentExerciseIndex = createSelector(
  getExamResults,
  results => results.size
);
const getExamCurrentExercise = createSelector(
  getExamExercises,
  getExamCurrentExerciseIndex,
  (exercises, index) => {
    return exercises.get(index);
  }
);

export const selectors = {
  getExamInitialized,
  getExamExercises,
  getExamResults,
  getExamScore,
  getExamScoreMax,
  getExamCurrentExerciseIndex,
  getExamCurrentExercise
};
