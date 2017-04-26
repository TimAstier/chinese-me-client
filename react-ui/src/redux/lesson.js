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
  dialogsData: [],
  charsData: [],
  grammarsData: [],
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET:
      return state.merge(fromJS({
        id: action.data.id,
        title: action.data.title,
        dialogsData: action.data.dialogsData,
        charsData: action.data.charsData,
        grammarsData: action.data.grammarsData
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
  return state.get('charsData').size;
}

export function grammarCount(state) {
  return state.get('dialogsData').size;
}

export function getComment(state, resourceId, resourceType) {
  // TODO: Use Reselect to avoid calling this N times
  console.log('Called getComment selector!');
  const stateName = `${resourceType}sData`;
  const resourceData = state.get(stateName);
  const index = resourceData.findIndex(e => e.get('id') === resourceId);
  const resource = resourceData.get(index);
  if (resource !== undefined) {
    const comment = resource.get('comment');
    if (comment === null) {
      return '';
    }
    return comment;
  }
  return '';
}
