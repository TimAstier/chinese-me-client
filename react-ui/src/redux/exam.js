import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Types

export const types = {
  SET_INITIALIZED: 'exam/SET_INITIALIZED',
  SET_EXERCISES: 'exam/SET_EXERCISES',
  CORRECT_ANSWER: 'exam/CORRECT_ANSWER',
  WRONG_ANSWER: 'exam/WRONG_ANSWER',
  DECREMENT_TIME: 'exam/DECREMENT_TIME'
};

// Reducer

// TODO: Use real data
const testData = [{
  type: 'a',
  id: 1
}, {
  type: 'b',
  id: 2
}, {
  type: 'a',
  id: 3
}, {
  type: 'a',
  id: 4
}, {
  type: 'a',
  id: 5
}, {
  type: 'a',
  id: 6
}, {
  type: 'a',
  id: 7
}, {
  type: 'a',
  id: 8
}, {
  type: 'a',
  id: 9
}, {
  type: 'a',
  id: 10
}];

export const INITIAL_STATE = fromJS({
  initialized: false,
  exercises: testData, // [ { type, id } ] <- As in review
  results: [0, 0, 0, 1, 0],
  time: 300 // in seconds
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
    case types.DECREMENT_TIME:
      return state.set('time', state.get('time') - 1);
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
const decrementTime = () => ({ type: types.DECREMENT_TIME });

export const actions = {
  setInitialized,
  setExercises,
  correctAnswer,
  wrongAnswer,
  decrementTime
};

// Selectors

const getExamInitialized = state => state.get('initialized');
const getExamExercises = state => state.get('exercises');
const getExamResults = state => state.get('results');
const getExamTime = state => state.get('time');
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
const getExamTimeLeft = createSelector(
  getExamTime,
  time => time / INITIAL_STATE.get('time')
);
const getExamTimeLabel = createSelector(
  getExamTime,
  time => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  }
);
const getExamCurrentExercise = createSelector(
  getExamExercises,
  getExamCurrentExerciseIndex,
  (exercises, index) => {
    console.log(exercises.get(5))
    return exercises.get(5);
  }
);

export const selectors = {
  getExamInitialized,
  getExamExercises,
  getExamTime,
  getExamResults,
  getExamScore,
  getExamScoreMax,
  getExamCurrentExerciseIndex,
  getExamTimeLeft,
  getExamTimeLabel,
  getExamCurrentExercise
};
