import { fromJS } from 'immutable';
import setEntities from '../utils/setEntities';

// Action Types

export const types = {
  FETCH: 'entities/FETCH',
  FETCH_SUCCESS: 'entities/FETCH_SUCCESS',
  FETCH_FAIL: 'entities/FETCH_FAIL',
  RECEIVED: 'entities/RECEIVED',
  UPDATE: 'entities/UPDATE'
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
        return state.update(entityId, entity => entity.set(attribute, newValue));
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

export const actions = {
  fetch,
  fetchSuccess,
  fetchFail,
  received,
  update
};

// Selectors

const getAvatars = state => state.get('avatars');
const getEpisodes = state => state.get('episodes');
const getDialogs = state => state.get('dialogs');
const getStatements = state => state.get('statements');
const getSentences = state => state.get('sentences');

export const selectors = {
  getAvatars,
  getEpisodes,
  getDialogs,
  getStatements,
  getSentences
};
