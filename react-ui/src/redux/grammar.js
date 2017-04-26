import { fromJS } from 'immutable';
import axios from 'axios';
import apiCall from '../helpers/apiCall';
import GrammarDeserializer from '../utils/deserializers/grammar';

// Action Types
const SET_GRAMMAR = 'chinese-me/grammars/SET_GRAMMAR';
const SET_SENTENCES = 'chinese-me/grammars/SET_SENTENCES';
const FETCH = 'chinese-me/grammars/FETCH';
const FETCH_SUCCESS = 'chinese-me/grammars/FETCH_SUCCESS';
const FETCH_FAIL = 'chinese-me/grammars/FETCH_FAIL';

// Reducer
const INITIAL_STATE = fromJS({
  id: null,
  title: '',
  explanation: '',
  sentences: [],
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_GRAMMAR:
      return state.merge(fromJS({
        id: action.grammar.id,
        title: action.grammar.title,
        explanation: action.grammar.explanation
      }));
    case SET_SENTENCES:
      return state.set('sentences', fromJS(action.sentences));
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
function setGrammar(grammar) {
  return {
    type: SET_GRAMMAR,
    grammar
  };
}

function setSentences(sentences) {
  return {
    type: SET_SENTENCES,
    sentences
  };
}

function set(data) {
  return dispatch => {
    dispatch(setGrammar(data.grammar));
    return dispatch(setSentences(data.sentences));
  };
}

function fetch(grammarId) {
  return dispatch => {
    dispatch({ type: FETCH });
    return axios.get(`${process.env.REACT_APP_API_URL}/api/grammar/${grammarId}`);
  };
}

function fetchSuccess(data) {
  return dispatch => {
    dispatch({ type: FETCH_SUCCESS });
    return dispatch(set(GrammarDeserializer(data)));
  };
}

function fetchFail() {
  return { type: FETCH_FAIL };
}

export function get(data) {
  return apiCall(data, fetch, fetchSuccess, fetchFail);
}
