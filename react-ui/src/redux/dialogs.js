import { fromJS } from 'immutable';
import axios from 'axios';
import apiCall from '../helpers/apiCall';
import DialogDeserializer from '../utils/deserializers/dialog';

// Action Types
const SET_DIALOG = 'chinese-me/dialogs/SET_DIALOG';
const SET_LINES = 'chinese-me/dialogs/SET_LINES';
const FETCH = 'chinese-me/dialogs/FETCH';
const FETCH_SUCCESS = 'chinese-me/dialogs/FETCH_SUCCESS';
const FETCH_FAIL = 'chinese-me/dialogs/FETCH_FAIL';

// Reducer
const INITIAL_STATE = fromJS({
  dialog: {},
  lines: [],
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_DIALOG:
      return state.set('dialog', fromJS(action.dialog));
    case SET_LINES:
      return state.set('lines', fromJS(action.lines));
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
function setDialog(dialog) {
  return {
    type: SET_DIALOG,
    dialog
  };
}

function setLines(lines) {
  return {
    type: SET_LINES,
    lines
  };
}

function set(data) {
  return dispatch => {
    dispatch(setDialog(data.dialog));
    return dispatch(setLines(data.lines));
  };
}

function fetch(dialogId) {
  return dispatch => {
    dispatch({ type: FETCH });
    return axios.get(`${process.env.REACT_APP_API_URL}/api/dialog/${dialogId}`);
  };
}

function fetchSuccess(data) {
  return dispatch => {
    dispatch({ type: FETCH_SUCCESS });
    return dispatch(set(DialogDeserializer(data)));
  };
}

function fetchFail() {
  return { type: FETCH_FAIL };
}

export function get(data) {
  return apiCall(data, fetch, fetchSuccess, fetchFail);
}
