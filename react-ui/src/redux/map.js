import { fromJS } from 'immutable';

// Types

export const types = {
  SET_FOCUSED_EPISODE_ID: 'map/SET_FOCUSED_EPISODE_ID',
  SET_DATA: 'map/SET_DATA',
  FETCH_SUCCESS: 'map/FETCH_SUCCESS',
  FETCH_MAP: 'map/FETCH_MAP',
  SET_IS_LOADING: 'map/SET_IS_LOADING',
  SET_IS_DATA_LOADED: 'map/SET_IS_DATA_LOADED'
};

// Reducer

export const INITIAL_STATE = fromJS({
  focusedEpisodeId: null,
  loadedEpisodeId: null,
  characters: [],
  grammars: [],
  dialogs: [],
  isLoading: false,
  isDataLoaded: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_FOCUSED_EPISODE_ID:
      return state.set('focusedEpisodeId', action.payload.id);
    case types.SET_DATA:
      return state.merge({
        loadedEpisodeId: String(action.payload.data.id),
        characters: action.payload.data.characters,
        grammars: action.payload.data.grammars,
        dialogs: action.payload.data.dialogs
      });
    case types.FETCH_SUCCESS:
      return state.merge({
        isLoading: false,
        isDataLoaded: true
      });
    case types.FETCH_FAIL:
      return state.merge({
        isLoading: false,
        isDataLoaded: false
      });
    case types.SET_IS_LOADING:
      return state.set('isLoading', action.payload.isLoading);
    case types.SET_IS_DATA_LOADED:
      return state.set('isDataLoaded', action.payload.isDataLoaded);
    default: return state;
  }
}

// Actions

const setFocusedEpisodeId = id => ({
  type: types.SET_FOCUSED_EPISODE_ID,
  payload: { id }
});

const setData = data => ({
  type: types.SET_DATA,
  payload: { data }
});

const fetchSuccess = () => ({
  type: types.FETCH_SUCCESS
});

const fetchFail = error => ({
  type: types.FETCH_FAIL,
  payload: { error }
});

const setIsLoading = isLoading => ({
  type: types.SET_IS_LOADING,
  payload: { isLoading }
});

const setIsDataLoaded = isDataLoaded => ({
  type: types.SET_IS_DATA_LOADED,
  payload: { isDataLoaded }
});

export const actions = {
  setFocusedEpisodeId,
  setData,
  fetchSuccess,
  fetchFail,
  setIsLoading,
  setIsDataLoaded
};

// Selectors

const getFocusedEpisodeId = state => state.get('focusedEpisodeId');
const getMapCharacters = state => state.get('characters');
const getMapGrammars = state => state.get('grammars');
const getMapDialogs = state => state.get('dialogs');
const getIsMapDataLoaded = state => state.get('isDataLoaded');
const getMapLoadedEpisodeId = state => state.get('loadedEpisodeId');

export const selectors = {
  getFocusedEpisodeId,
  getMapCharacters,
  getMapGrammars,
  getMapDialogs,
  getIsMapDataLoaded,
  getMapLoadedEpisodeId
};
