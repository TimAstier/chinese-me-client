import Immutable, { fromJS } from 'immutable';
import setEntities from '../helpers/setEntities';

// Action Types

export const types = {
  FETCH: 'entities/FETCH',
  FETCH_SUCCESS: 'entities/FETCH_SUCCESS',
  FETCH_FAIL: 'entities/FETCH_FAIL',
  RECEIVED: 'entities/RECEIVED'
};

// High-order Reducer

export const INITIAL_STATE = Immutable.OrderedMap();

export default function createNamedEntityReducer(reducerName, EntityModel) {
  return (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
      case types.RECEIVED:
        if (!action.entities[reducerName]) { return state; }
        return setEntities(
          state,
          fromJS(action.entities[reducerName]),
          EntityModel
        );
      // case types.FETCH: return state.set('isFetching', true);
      // case types.FETCH_SUCCESS:
      // case types.FETCH_FAIL: return state.set('isFetching', false);
      default: return state;
    }
  };
}

// Action Creators

const fetch = endpoint => ({ type: types.FETCH, endpoint });
const fetchSuccess = () => ({ type: types.FETCH_SUCCESS });
const fetchFail = error => ({ type: types.FETCH_FAIL, error });
const received = entities => ({ type: types.RECEIVED, entities });

export const actions = {
  fetch,
  fetchSuccess,
  fetchFail,
  received
};

// Selectors

const getEntities = (state, reducerName) => {
  if (!state.get(reducerName)) {
    return INITIAL_STATE;
  }
  return state.get(reducerName);
};

// const getIsFetching = state => state.get('isFetching');

export const selectors = { getEntities };
