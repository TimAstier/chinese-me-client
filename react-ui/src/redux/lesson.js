import { fromJS } from 'immutable';

// Types

export const types = {
  SET_INITIALIZED: 'lesson/SET_INITIALIZED',
  SET_CURRENT_ID: 'lesson/SET_CURRENT_ID'
};

// Reducer

export const INITIAL_STATE = fromJS({
  initialized: false,
  currentLessonId: null,
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_INITIALIZED:
      return state.set('initialized', action.payload.initialized);
    case types.SET_CURRENT_ID:
      return state.set('currentLessonId', action.payload.id);
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

export const actions = {
  setInitialized,
  setCurrentLessonId
};

// Selectors

const getLessonInitiliazed = state => state.get('initialized');
const getCurrentLessonId = state => state.get('currentLessonId');

export const selectors = {
  getLessonInitiliazed,
  getCurrentLessonId
};
