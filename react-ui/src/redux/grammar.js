import { fromJS } from 'immutable';
import { apiCall, Api } from '../helpers/api';
import GrammarDeserializer from '../utils/deserializers/grammar';

const api = new Api();

// Action Types
export const types = {
  SET_GRAMMAR: 'grammar/SET_GRAMMAR',
  SET_SENTENCES: 'grammar/SET_SENTENCES',
  FETCH_REQUEST: 'grammar/FETCH_REQUEST',
  FETCH_SUCCESS: 'grammar/FETCH_SUCCESS',
  FETCH_FAIL: 'grammar/FETCH_FAIL'
};

// Reducer
export const INITIAL_STATE = fromJS({
  id: null,
  title: '',
  explanation: '',
  sentences: [],
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_GRAMMAR:
      return state.merge(fromJS({
        id: action.grammar.id,
        title: action.grammar.title,
        explanation: action.grammar.explanation
      }));
    case types.SET_SENTENCES:
      return state.set('sentences', fromJS(action.sentences));
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
function setGrammar(grammar) {
  return {
    type: types.SET_GRAMMAR,
    grammar
  };
}

function setSentences(sentences) {
  return {
    type: types.SET_SENTENCES,
    sentences
  };
}

function set(data) {
  return dispatch => {
    dispatch(setGrammar(data.grammar));
    return dispatch(setSentences(data.sentences));
  };
}

function fetchRequest(grammarId) {
  return dispatch => {
    dispatch({ type: types.FETCH_REQUEST });
    return api.get(`/grammar/${grammarId}`);
  };
}

function fetchSuccess(data) {
  return dispatch => {
    dispatch({ type: types.FETCH_SUCCESS });
    return dispatch(set(GrammarDeserializer(data)));
  };
}

function fetchFail() {
  return { type: types.FETCH_FAIL };
}

export function fetch(data) {
  return apiCall(data, fetchRequest, fetchSuccess, fetchFail);
}

// Selectors
const duckState = state => state.get('grammar');
export const getTitle = state => duckState(state).get('title');
export const getSentences = state => duckState(state).get('sentences');
export const getExplanation = state => duckState(state).get('explanation');
export const getIsFetching = state => duckState(state).get('isFetching');
