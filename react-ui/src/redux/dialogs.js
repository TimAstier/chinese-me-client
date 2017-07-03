import { RECEIVED_ENTITIES } from '../constants/actionTypes';

// Action Types
export const types = {
  FETCH: 'dialogs/FETCH',
  FETCH_SUCCESS: 'dialogs/FETCH_SUCCESS',
  FETCH_FAIL: 'dialogs/FETCH_FAIL'
};

// Reducers

export const INITIAL_SATE = {};

export default function reducer(state = INITIAL_SATE, action = {}) {
  return state;
}

// Action Creators

const fetch = episodeId => ({
  type: types.FETCH,
  endpoint: '/episode/' + episodeId + '/dialogs'
});
const fetchSuccess = () => ({ type: types.FETCH_SUCCESS });
const fetchFail = error => ({ type: types.FETCH_FAIL, error });
const receivedEntities = entities => ({ type: RECEIVED_ENTITIES, entities });

export const actions = {
  fetch,
  fetchSuccess,
  fetchFail,
  receivedEntities
};

// Selectors
