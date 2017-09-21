import { fromJS } from 'immutable';
import { types as studyTypes } from './study';

// Action types

export const types = {
  SET_FOCUSED_EPISODE_ID: 'map/SET_FOCUSED_EPISODE_ID',
  SET_DATA: 'map/SET_DATA',
  FETCH_SUCCESS: 'map/FETCH_SUCCESS',
  FETCH_MAP: 'map/FETCH_MAP'
};

// Reducer
export const INITIAL_STATE = fromJS({
  focusedEpisodeId: null,
  characters: [],
  grammars: [],
  dialogs: [],
  isLoading: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_FOCUSED_EPISODE_ID:
    case studyTypes.SET_CURRENT_EPISODE_ID:
      return state.merge({
        focusedEpisodeId: action.payload.id,
        isLoading: true
      });
    case types.SET_DATA:
      return state.merge({
        characters: action.payload.data.characters,
        grammars: action.payload.data.grammars,
        dialogs: action.payload.data.dialogs
      });
    case types.FETCH_SUCCESS:
    case types.FETCH_FAIL:
      return state.set('isLoading': false);
    default: return state;
  }
}

// Action Creators

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

export const actions = {
  setFocusedEpisodeId,
  setData,
  fetchSuccess,
  fetchFail
};

// Selectors

const getFocusedEpisodeId = state => state.get('focusedEpisodeId');
const getMapCharacters = state => state.get('characters');
const getMapGrammars = state => state.get('grammars');
const getMapDialogs = state => state.get('dialogs');

export const selectors = {
  getFocusedEpisodeId,
  getMapCharacters,
  getMapGrammars,
  getMapDialogs
};
