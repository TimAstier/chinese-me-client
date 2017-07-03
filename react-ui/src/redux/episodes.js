import { fromJS } from 'immutable';
import Episode from '../models/Episode';
import EpisodeMap from '../models/EpisodeMap';
import { RECEIVED_ENTITIES } from '../constants/actionTypes';

// Action Types

export const types = {
  FETCH: 'episodes/FETCH',
  FETCH_SUCCESS: 'episodes/FETCH_SUCCESS',
  FETCH_FAIL: 'episodes/FETCH_FAIL'
};

// Reducers

export const INITIAL_STATE = fromJS({
  entities: new EpisodeMap(),
  isFetching: false
});

// Idea: this might be changed into a shared helper later
const setEntities = (state, newEpisodes) => {
  return state.mergeIn(
    ['entities'],
    newEpisodes.map(episode => {
      return new Episode({
        id: episode.id,
        ...episode.get('attributes').toJS()
      });
    })
  );
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case RECEIVED_ENTITIES:
      if (!action.entities.episodes) { return state; }
      return setEntities(state, fromJS(action.entities.episodes));
    case types.FETCH: return state.set('isFetching', true);
    case types.FETCH_SUCCESS:
    case types.FETCH_FAIL: return state.set('isFetching', false);
    default: return state;
  }
}

// Action Creators

const fetch = () => ({
  type: types.FETCH,
  endpoint: '/episodes'
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

const getEpisodes = state => state.get('entities');
const getIsFetching = state => state.get('isFetching');

export const selectors = { getEpisodes, getIsFetching };
