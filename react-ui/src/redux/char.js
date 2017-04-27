import { fromJS } from 'immutable';
import { apiCall, Api } from '../helpers/api';

const api = new Api();

// Action Types
export const types = {
  SET: 'CHAR/SET',
  FETCH_REQUEST: 'CHAR/FETCH_REQUEST',
  FETCH_SUCCESS: 'CHAR/FETCH_SUCCESS',
  FETCH_FAIL: 'CHAR/FETCH_FAIL'
};

// Reducer
export const INITIAL_STATE = fromJS({
  id: null,
  chinese: '',
  pinyin: '',
  pinyint: '',
  explanation: '',
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET:
      return state.merge(fromJS({
        id: action.char.id,
        chinese: action.char.chinese,
        pinyin: action.char.pinyin,
        pinyint: action.char.pinyint,
        explanation: action.char.explanation
      }));
    case types.FETCH_REQUEST:
      return state.set('isFetching', true);
    case types.FETCH_SUCCESS:
    case types.FETCH_FAIL:
      return state.set('isFetching', false);
    default:
      return state;
  }
}

// Action Creators
function set(char) {
  return {
    type: types.SET,
    char
  };
}

function fetchRequest(charId) {
  return dispatch => {
    dispatch({ type: types.FETCH_REQUEST });
    return api.get(`/char/${charId}`);
  };
}

function fetchSuccess(data) {
  return dispatch => {
    dispatch({ type: types.FETCH_SUCCESS });
    return dispatch(set(data.data.attributes));
    // return dispatch(set(deserializeChars(data.chars)));
  };
}

function fetchFail() {
  return { type: types.FETCH_FAIL };
}

export function fetch(data) {
  return apiCall(data, fetchRequest, fetchSuccess, fetchFail);
}

// Selectors
const duckState = state => state.get('char');
export const getChinese = state => duckState(state).get('chinese');
export const getPinyint = state => duckState(state).get('pinyint');
export const getExplanation = state => duckState(state).get('explanation');
export const getIsFetching = state => duckState(state).get('isFetching');
