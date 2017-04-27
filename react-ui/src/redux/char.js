import { fromJS } from 'immutable';
import { apiCall, Api } from '../helpers/api';

const api = new Api();

// Action Types
const SET = 'chinese-me/chars/SET';
const FETCH = 'chinese-me/chars/FETCH';
const FETCH_SUCCESS = 'chinese-me/chars/FETCH_SUCCESS';
const FETCH_FAIL = 'chinese-me/chars/FETCH_FAIL';

// Reducer
const INITIAL_STATE = fromJS({
  id: null,
  chinese: '',
  pinyin: '',
  pinyint: '',
  explanation: '',
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET:
      return state.merge(fromJS({
        id: action.char.id,
        chinese: action.char.chinese,
        pinyin: action.char.pinyin,
        pinyint: action.char.pinyint,
        explanation: action.char.explanation
      }));
    case FETCH:
      return state.set('isFetching', true);
    case FETCH_SUCCESS:
    case FETCH_FAIL:
      return state.set('isFetching', false);
    default:
      return state;
  }
}

// Action Creators
function set(char) {
  return {
    type: SET,
    char
  };
}

function fetch(charId) {
  return dispatch => {
    dispatch({ type: FETCH });
    return api.get(`/char/${charId}`);
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
