import { List, fromJS } from 'immutable';

// Action Types

export const types = {
  SET: 'episodes/SET',
  FETCH: 'episodes/FETCH',
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

export const set = data => ({ type: types.SET, data });
export const fetch = () => ({ type: types.FETCH });
export const fetchSuccess = () => ({ type: types.FETCH_SUCCESS });
export const fetchFail = error => ({ type: types.FETCH_FAIL, error });

// Selectors

const duckState = state => state.get('episodes');
export const getEpisodes = state => duckState(state);
