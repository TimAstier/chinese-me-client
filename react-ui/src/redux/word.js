import { fromJS } from 'immutable';
import { apiCall, Api } from '../helpers/api';

const api = new Api();

// Action Types
export const types = {
  SET: 'WORD/SET',
  FETCH_REQUEST: 'WORD/FETCH_REQUEST',
  FETCH_SUCCESS: 'WORD/FETCH_SUCCESS',
  FETCH_FAIL: 'WORD/FETCH_FAIL'
};

// Reducer
export const INITIAL_STATE = fromJS({
  id: null,
  chinese: '',
  pinyin: '',
  pinyint: '',
  explanation: '',
  english: '',
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET:
      return state.merge(fromJS({
        id: action.word.id,
        chinese: action.word.chinese,
        pinyin: action.word.pinyin,
        pinyint: action.word.pinyint,
        explanation: action.word.explanation,
        english: action.word.english
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
function set(word) {
  return {
    type: types.SET,
    word
  };
}

function fetchRequest(wordId) {
  return dispatch => {
    dispatch({ type: types.FETCH_REQUEST });
    return api.get(`/word/${wordId}`);
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
const duckState = state => state.get('word');
export const getChinese = state => duckState(state).get('chinese');
export const getPinyint = state => duckState(state).get('pinyint');
export const getExplanation = state => duckState(state).get('explanation');
export const getEnglish = state => duckState(state).get('english');
export const getIsFetching = state => duckState(state).get('isFetching');
