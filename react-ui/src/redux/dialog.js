import { fromJS } from 'immutable';
import { apiCall, Api } from '../helpers/api';
import DialogDeserializer from '../utils/deserializers/dialog';

const api = new Api();

// Action Types
export const types = {
  SET_DIALOG: 'dialog/SET_DIALOG',
  SET_LINES: 'dialog/SET_LINES',
  FETCH_REQUEST: 'dialog/FETCH_REQUEST',
  FETCH_SUCCESS: 'dialog/FETCH_SUCCESS',
  FETCH_FAIL: 'dialog/FETCH_FAIL'
};

// Reducer
export const INITIAL_STATE = fromJS({
  id: null,
  title: '',
  lines: [],
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_DIALOG:
      return state.merge(fromJS({
        id: action.dialog.id,
        title: action.dialog.title
      }));
    case types.SET_LINES:
      return state.set('lines', fromJS(action.lines));
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
function setDialog(dialog) {
  return {
    type: types.SET_DIALOG,
    dialog
  };
}

function setLines(lines) {
  return {
    type: types.SET_LINES,
    lines
  };
}

function set(data) {
  return dispatch => {
    dispatch(setDialog(data.dialog));
    return dispatch(setLines(data.lines));
  };
}

function fetchRequest(dialogId) {
  return dispatch => {
    dispatch({ type: types.FETCH_REQUEST });
    return api.get(`/dialog/${dialogId}`);
  };
}

function fetchSuccess(data) {
  return dispatch => {
    dispatch({ type: types.FETCH_SUCCESS });
    return dispatch(set(DialogDeserializer(data)));
  };
}

function fetchFail() {
  return { type: types.FETCH_FAIL };
}

export function fetch(data) {
  return apiCall(data, fetchRequest, fetchSuccess, fetchFail);
}

// Selectors
const duckState = state => state.get('dialog');
export const getTitle = state => duckState(state).get('title');
export const getLines = state => duckState(state).get('lines');
export const getIsFetching = state => duckState(state).get('isFetching');
