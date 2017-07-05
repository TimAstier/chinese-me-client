import Immutable from 'immutable';

// Action Types

export const types = {
  SET: 'study/SET'
};

// Reducers

export const INITIAL_STATE = Immutable.Map({
  currentEpisodeId: null,
  currentDialogId: null,
  currentStatementId: null,
  currentSentenceId: null
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET:
      return state.set(action.payload.attribute, action.payload.id);
    default: return state;
  }
}

// Action Creators

const set = (attribute, id) => {
  return {
    type: types.SET,
    payload: { attribute, id }
  };
};

export const actions = {
  set
};

// Selectors

const getCurrentEpisodeId = state => state.get('currentEpisodeId');
const getCurrentDialogId = state => state.get('currentDialogId');
const getCurrentStatementId = state => state.get('currentStatementId');
const getCurrentSentenceId = state => state.get('currentSentenceId');

export const selectors = {
  getCurrentEpisodeId,
  getCurrentDialogId,
  getCurrentStatementId,
  getCurrentSentenceId
};
