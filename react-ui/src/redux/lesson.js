import { fromJS } from 'immutable';
import { apiCall, Api } from '../helpers/api';
import LessonDeserializer from '../utils/deserializers/lesson';
import { setResources } from './resources';

const api = new Api();

// Action Types
export const types = {
  SET: 'LESSONS/SET',
  FETCH_REQUEST: 'LESSONS/FETCH_REQUEST',
  FETCH_SUCCESS: 'LESSONS/FETCH_SUCCESS',
  FETCH_FAIL: 'LESSONS/FETCH_FAIL'
};

// Reducer
export const INITIAL_STATE = fromJS({
  title: '',
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET: return state.set('title', action.data);
    case types.FETCH_REQUEST: return state.set('isFetching', true);
    case types.FETCH_SUCCESS:
    case types.FETCH_FAIL: return state.set('isFetching', false);
    default: return state;
  }
}

// Action Creators
function set(data) {
  return {
    type: types.SET,
    data
  };
}

function fetch(lessonId) {
  return dispatch => {
    dispatch({ type: types.FETCH_REQUEST });
    return api.get(`/lesson/${lessonId}`);
  };
}

function fetchSuccess(data) {
  return dispatch => {
    dispatch({ type: types.FETCH_SUCCESS });
    const deserializedData = LessonDeserializer(data);
    dispatch(set(deserializedData.title));
    return dispatch(setResources(deserializedData.resources));
  };
}

function fetchFail() {
  return { type: types.FETCH_FAIL };
}

const getLessonFuncs = [fetch, fetchSuccess, fetchFail];
export const fetchLesson = data => apiCall(data, ...getLessonFuncs);

// Selectors
const duckState = state => state.get('lesson');
export const getTitle = state => duckState(state).get('title');
