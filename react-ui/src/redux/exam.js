import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { EventTypes } from 'redux-segment';

// Types

export const types = {
  SET_INITIALIZED: 'exam/SET_INITIALIZED',
  SET_COMPLETED: 'exam/SET_COMPLETED',
  SET_EXERCISES: 'exam/SET_EXERCISES',
  CORRECT_ANSWER: 'exam/CORRECT_ANSWER',
  WRONG_ANSWER: 'exam/WRONG_ANSWER',
  CLEAN: 'exam/CLEAN',
  STARTED_EXAM: 'exam/STARTED_EXAM'
};

// Reducer

export const INITIAL_STATE = fromJS({
  initialized: false,
  completed: false,
  exercises: [], // [ { type, id } ]
  results: []
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_INITIALIZED:
      return state.set('initialized', action.payload.initialized);
    case types.SET_COMPLETED:
      return state.set('completed', action.payload.completed);
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
const setCompleted = completed => ({
  type: types.SET_COMPLETED,
  payload: { completed }
});
const setExercises = exercises => ({
  type: types.SET_EXERCISES,
  payload: { exercises }
});
const correctAnswer = () => ({ type: types.CORRECT_ANSWER });
const wrongAnswer = () => ({ type: types.WRONG_ANSWER });
const clean = () => ({ type: types.CLEAN });
const startedExam = properties => ({
  type: types.STARTED_EXAM,
  meta: {
    analytics: {
      eventType: EventTypes.track,
      eventPayload: {
        event: 'Started Exam',
        properties
      }
    }
  }
});

export const actions = {
  setInitialized,
  setCompleted,
  setExercises,
  correctAnswer,
  wrongAnswer,
  clean,
  startedExam
};

// Selectors

const getInitialized = state => state.get('initialized');
const getCompleted = state => state.get('completed');
const getExercises = state => state.get('exercises');
const getResults = state => state.get('results');
const getScore = createSelector(
  getResults,
  results => results.filter(e => e === 1).size
);
const getScoreMax = createSelector(
  getExercises,
  exercises => exercises.size
);
const getCurrentExerciseIndex = createSelector(
  getResults,
  results => results.size
);
const getCurrentExercise = createSelector(
  getExercises,
  getCurrentExerciseIndex,
  (exercises, index) => {
    return exercises.get(index);
  }
);

export const selectors = {
  getInitialized,
  getCompleted,
  getExercises,
  getResults,
  getScore,
  getScoreMax,
  getCurrentExerciseIndex,
  getCurrentExercise
};
