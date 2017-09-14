import { fromJS } from 'immutable';

// Types

export const types = {
  SET_INITIALIZED: 'lesson/SET_INITIALIZED',
  SET_CURRENT_ID: 'lesson/SET_CURRENT_ID',
  SET_CURRENT_NUMBER: 'lesson/SET_CURRENT_NUMBER'
};

// Reducer

export const INITIAL_STATE = fromJS({
  initialized: false,
  currentLessonId: null,
  currentLessonNumber: null
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_INITIALIZED:
      return state.set('initialized', action.payload.initialized);
    case types.SET_CURRENT_ID:
      return state.set('currentLessonId', action.payload.id);
    case types.SET_CURRENT_NUMBER:
      return state.set('currentLessonNumber', action.payload.number);
    default: return state;
  }
}

// Actions

const setInitialized = initialized => ({
  type: types.SET_INITIALIZED,
  payload: { initialized }
});

const setCurrentLessonId = id => ({
  type: types.SET_CURRENT_ID,
  payload: { id }
});

const setCurrentLessonNumber = number => ({
  type: types.SET_CURRENT_NUMBER,
  payload: { number }
});

export const actions = {
  setInitialized,
  setCurrentLessonId,
  setCurrentLessonNumber
};

// Selectors

const getLessonInitiliazed = state => state.get('initialized');
const getCurrentLessonId = state => state.get('currentLessonId');
const getCurrentLessonNumber = state => state.get('currentLessonNumber');

export const selectors = {
  getLessonInitiliazed,
  getCurrentLessonId,
  getCurrentLessonNumber
};
