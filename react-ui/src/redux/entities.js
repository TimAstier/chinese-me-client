import { fromJS } from 'immutable';
import setEntities from '../utils/setEntities';

// Action Types

export const types = {
  FETCH: 'entities/FETCH',
  FETCH_SUCCESS: 'entities/FETCH_SUCCESS',
  FETCH_FAIL: 'entities/FETCH_FAIL',
  RECEIVED: 'entities/RECEIVED',
  UPDATE: 'entities/UPDATE',
  CLEAR: 'entities/CLEAR'
};

// High-order Reducer

export default function createNamedEntityReducer(reducerName, EntityModel, EntityMapModel) {
  const INITIAL_STATE = new EntityMapModel();
  return (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
      case types.RECEIVED:
        if (!action.entities[reducerName]) { return state; }
        return setEntities(
          state,
          fromJS(action.entities[reducerName]),
          EntityModel
        );
      case types.UPDATE:
        const { entityName, entityId, attribute, newValue } = action.payload;
        if (reducerName !== entityName) { return state; }
        if (!state.get(entityId)) {
          return state;
        }
        return state.update(entityId, entity => entity.set(attribute, newValue));
      case types.CLEAR:
        return INITIAL_STATE;
      default: return state;
    }
  };
}

// Action Creators

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
const clear = () => ({ type: types.CLEAR });

export const actions = {
  fetch,
  fetchSuccess,
  fetchFail,
  received,
  update,
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

export const selectors = {
  getAvatars,
  getCharacters,
  getDialogs,
  getGrammars,
  getEpisodes,
  getStatements,
  getSentences,
  getSeasons,
  getMultipleChoices
};
