import { fromJS } from 'immutable';
import axios from 'axios';
import apiCall from '../helpers/apiCall';
import LessonDeserializer from '../utils/deserializers/lesson';

// Action Types
const SET = 'chinese-me/lessons/SET';
const FETCH = 'chinese-me/lessons/FETCH';
const FETCH_SUCCESS = 'chinese-me/lessons/FETCH_SUCCESS';
const FETCH_FAIL = 'chinese-me/lessons/FETCH_FAIL';

// Reducer
const INITIAL_STATE = fromJS({
  id: null,
  title: '',
  dialogIds: [],
  charIds: [],
  grammarIds: [],
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET:
      return state.merge(fromJS({
        id: action.data.id,
        title: action.data.title,
        dialogIds: action.data.dialogIds,
        charIds: action.data.charIds,
        grammarIds: action.data.grammarIds
      }));
    case FETCH:
      return state.set('isFetching', true);
    case FETCH_SUCCESS:
      return state.set('isFetching', false);
    case FETCH_FAIL:
      return state.set('isFetching', false);
    default:
      return state;
  }
}

// Action Creators
function set(data) {
  return {
    type: SET,
    data
  };
}

function fetch(lessonId) {
  return dispatch => {
    dispatch({ type: FETCH });
    return axios.get(`${process.env.REACT_APP_API_URL}/api/lesson/${lessonId}`);
  };
}

function fetchSuccess(data) {
  return dispatch => {
    dispatch({ type: FETCH_SUCCESS });
    return dispatch(set(LessonDeserializer(data)));
  };
}

function fetchFail() {
  return { type: FETCH_FAIL };
}

export function get(data) {
  return apiCall(data, fetch, fetchSuccess, fetchFail);
}

// Selectors

export function charCount(state) {
  return state.get('charIds').size;
}

export function grammarCount(state) {
  return state.get('grammarIds').size;
}

export function getTitle(state) {
  return state.get('title');
}
