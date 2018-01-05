import { fromJS } from 'immutable';

// Types

export const types = {
  SET_STATUS: 'choicesToOrder/SET_STATUS',
  PUSH_INDEX: 'choicesToOrder/PUSH_INDEX',
  REMOVE_INDEX: 'choicesToOrder/REMOVE_INDEX',
  INIT: 'choicesToOrder/INIT'
};

// Reducer

export const INITIAL_STATE = fromJS({
  status: 'question',
  indexes: []
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_STATUS:
      return state.set('status', action.payload.status);
    case types.PUSH_INDEX:
      return state.set('indexes', state.get('indexes').push(action.payload.index));
    case types.REMOVE_INDEX:
      return state.set('indexes', state.get('indexes').splice(state.get('indexes').indexOf(action.payload.index), 1));
    case types.INIT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

// Actions

const setStatus = status => ({
  type: types.SET_STATUS,
  payload: { status }
});

const pushIndex = index => ({
  type: types.PUSH_INDEX,
  payload: { index }
});

const removeIndex = index => ({
  type: types.REMOVE_INDEX,
  payload: { index }
});

const init = () => ({ type: types.INIT });

export const actions = {
  setStatus,
  pushIndex,
  removeIndex,
  init
};

// Selectors

const getStatus = state => state.get('status');
const getIndexes = state => state.get('indexes');

export const selectors = {
  getStatus,
  getIndexes
};
