import { List, fromJS } from 'immutable';
import { apiCall, Api } from '../helpers/api';
import episodesDeserializer from '../utils/deserializers/episode';

const api = new Api();

// Action Types
export const types = {
  SET: 'episodes/SET',
  FETCH_REQUEST: 'episodes/FETCH_REQUEST',
  FETCH_SUCCESS: 'episodes/FETCH_SUCCESS',
  FETCH_FAIL: 'episodes/FETCH_FAIL'
};

// Reducers

const INITIAL_STATE = List();

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET: return state.merge(fromJS(action.data));
    default: return state;
  }
}

// Action Creators
const set = data => ({ type: types.SET, data });

const fetchRequest = () => {
  return dispatch => {
    dispatch({ type: types.FETCH_REQUEST });
    return api.get('/episodes');
  };
};

const fetchSuccess = data => {
  return dispatch => {
    dispatch({ type: types.FETCH_SUCCESS });
    return dispatch(set(episodesDeserializer(data)));
  };
};

function fetchFail() {
  return { type: types.FETCH_FAIL };
}

export function fetch() {
  return apiCall(null, fetchRequest, fetchSuccess, fetchFail);
}

// Selectors

const duckState = state => state.get('episodes');
export const getEpisodes = state => duckState(state);
