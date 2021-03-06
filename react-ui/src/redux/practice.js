import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { EventTypes } from 'redux-segment';

// Types

export const types = {
  INIT: 'practice/INIT',
  SET_INITIALIZED: 'practice/SET_INITIALIZED',
  SET_EXERCISES: 'practice/SET_EXERCISES',
  CORRECT_ANSWER: 'practice/CORRECT_ANSWER',
  WRONG_ANSWER: 'practice/WRONG_ANSWER',
  SET_TOTAL: 'practice/SET_TOTAL',
  SET_CORRECT_ANSWER: 'practice/SET_CORRECT_ANSWER',
  SET_EXPLANATION: 'practice/SET_EXPLANATION',
  SET_ERROR: 'practice/SET_ERROR',
  SET_TYPE: 'practice/SET_TYPE',
  STARTED_PRACTICE: 'practice/STARTED_PRACTICE',
  COMPLETED_PRACTICE: 'practice/COMPLETED_PRACTICE'
};

// Reducer

export const INITIAL_STATE = fromJS({
  initialized: false,
  exercises: [], // [ { type, id } ],
  total: null,
  correctAnswer: null,
  explanation: null,
  type: null,
  error: false,
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.INIT:
      return INITIAL_STATE;
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
    case types.SET_ERROR:
      return state.set('error', action.payload);
    case types.SET_TYPE:
      return state.set('type', action.payload);
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
const init = () => ({ type: types.INIT });
const setTotal = total => ({
  type: types.SET_TOTAL,
  payload: { total }
});
const setError = payload => ({ type: types.SET_ERROR, payload });
const setType = payload => ({ type: types.SET_TYPE, payload });
const startedPractice = properties => ({
  type: types.STARTED_PRACTICE,
  meta: {
    analytics: {
      eventType: EventTypes.track,
      eventPayload: {
        event: 'Started Practice',
        properties
      }
    }
  }
});
const completedPractice = properties => ({
  type: types.COMPLETED_PRACTICE,
  meta: {
    analytics: {
      eventType: EventTypes.track,
      eventPayload: {
        event: 'Completed Practice',
        properties
      }
    }
  }
});

export const actions = {
  setInitialized,
  setExercises,
  correctAnswer,
  wrongAnswer,
  init,
  setTotal,
  setCorrectAnswer,
  setExplanation,
  setError,
  setType,
  startedPractice,
  completedPractice
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
  (size, total) => {
    if (size === null || total === null) { return 0; }
    return (total - size) / total * 100;
  }
);
const getError = state => state.get('error');
const getType = state => state.get('type');

export const selectors = {
  getInitialized,
  getExercises,
  getExercisesSize,
  getCorrectAnswer,
  getExplanation,
  getTotal,
  getCurrentExercise,
  getPracticeCompletion,
  getError,
  getType
};
