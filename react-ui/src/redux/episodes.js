import { fromJS } from 'immutable';

// Action Types

export const types = {
  SET: 'episodes/SET',
  FETCH: 'episodes/FETCH',
  FETCH_SUCCESS: 'episodes/FETCH_SUCCESS',
  FETCH_FAIL: 'episodes/FETCH_FAIL'
};

// Reducers

export const INITIAL_STATE = fromJS({
  items: [],
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET: return state.merge(fromJS({ items: action.data }));
    case types.FETCH: return state.set('isFetching', true);
    case types.FETCH_SUCCESS:
    case types.FETCH_FAIL: return state.set('isFetching', false);
    default: return state;
  }
}

// Action Creators

const set = data => ({ type: types.SET, data });
const fetch = () => ({ type: types.FETCH });
const fetchSuccess = () => ({ type: types.FETCH_SUCCESS });
const fetchFail = error => ({ type: types.FETCH_FAIL, error });

export const actions = { set, fetch, fetchSuccess, fetchFail };

// Selectors

const getEpisodes = state => state.get('items');
const getIsFetching = state => state.get('isFetching');

export const selectors = { getEpisodes, getIsFetching };
