import Immutable from 'immutable';
import setEntities from '../utils/setEntities';

// Types

export const types = {
  FETCH: 'entities/FETCH',
  FETCH_SUCCESS: 'entities/FETCH_SUCCESS',
  FETCH_FAIL: 'entities/FETCH_FAIL',
  RECEIVED: 'entities/RECEIVED',
  UPDATE: 'entities/UPDATE',
  CLEAR_ALL_BUT: 'entities/CLEAR_ALL_BUT',
  CLEAR: 'entities/CLEAR'
};

// High-order Reducer

export default function createNamedEntityReducer(reducerName, EntityModel) {
  const INITIAL_STATE = new Immutable.OrderedMap();
  return (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
      case types.RECEIVED:
        if (!action.entities[reducerName]) { return state; }
        return setEntities(
          state,
          // Select only the slice of the normalized response
          // that matters for this entity reducer
          action.entities[reducerName],
          EntityModel
        );
      case types.UPDATE:
        const { entityName, entityId, attribute, newValue } = action.payload;
        if (reducerName !== entityName) { return state; }
        if (!state.get(entityId)) {
          return state;
        }
        return state.update(entityId, entity => entity.set(attribute, newValue));
      case types.CLEAR_ALL_BUT:
        if (action.payload.models.indexOf(reducerName) === -1) {
          return INITIAL_STATE;
        }
        return state;
      case types.CLEAR:
        return INITIAL_STATE;
      default: return state;
    }
  };
}

// Actions

const fetch = endpoint => ({ type: types.FETCH, payload: { endpoint } });
const fetchSuccess = () => ({ type: types.FETCH_SUCCESS });
const fetchFail = error => ({ type: types.FETCH_FAIL, error });
const received = entities => ({ type: types.RECEIVED, entities });
const update = (entityName, entityId, attribute, newValue) => {
  return {
    type: types.UPDATE,
    payload: { entityName, entityId, attribute, newValue }
  };
};
const clearAllBut = models => ({
  type: types.CLEAR_ALL_BUT,
  payload: { models }
});
const clear = () => ({ type: types.CLEAR });

export const actions = {
  fetch,
  fetchSuccess,
  fetchFail,
  received,
  update,
  clearAllBut,
  clear
};

// Selectors

const getAvatars = state => state.get('avatars');
const getCharacters = state => state.get('characters');
const getDialogs = state => state.get('dialogs');
const getGrammars = state => state.get('grammars');
const getEpisodes = state => state.get('episodes');
const getStatements = state => state.get('statements');
const getSentences = state => state.get('sentences');
const getSeasons = state => state.get('seasons');
const getMultipleChoices = state => state.get('multipleChoices');
const getAudioToTexts = state => state.get('audioToTexts');
const getWords = state => state.get('words');
const getExamples = state => state.get('examples');
const getVideos = state => state.get('videos');
const getBooks = state => state.get('books');

export const selectors = {
  getAvatars,
  getCharacters,
  getDialogs,
  getGrammars,
  getEpisodes,
  getStatements,
  getSentences,
  getSeasons,
  getMultipleChoices,
  getAudioToTexts,
  getWords,
  getExamples,
  getVideos,
  getBooks
};
