import { fromJS } from 'immutable';
import axios from 'axios';
import apiCall from '../helpers/apiCall';

// Action Types
const SET = 'chinese-me/chars/SET';
const FETCH = 'chinese-me/chars/FETCH';
const FETCH_SUCCESS = 'chinese-me/chars/FETCH_SUCCESS';
const FETCH_FAIL = 'chinese-me/chars/FETCH_FAIL';

// Reducer
const INITIAL_STATE = fromJS({
  char: {},
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET:
      return state.set('char', fromJS(action.char));
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
export function set(char) {
  return {
    type: SET,
    char
  };
}

function fetch(charId) {
  return dispatch => {
    dispatch({ type: FETCH });
    return axios.get(`${process.env.REACT_APP_API_URL}/api/char/${charId}`);
  };
}

function fetchSuccess(data) {
  return dispatch => {
    dispatch({ type: FETCH_SUCCESS });
    return dispatch(set(data.data.attributes));
    // return dispatch(set(deserializeChars(data.chars)));
  };
}

function fetchFail() {
  return { type: FETCH_FAIL };
}

export function get(data) {
  return apiCall(data, fetch, fetchSuccess, fetchFail);
}
