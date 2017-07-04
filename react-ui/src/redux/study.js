import Immutable from 'immutable';

// Action Types

export const types = {
  SET: 'study/SET'
};

// Reducers

export const INITIAL_STATE = Immutable.Map({
  currentEpisode: null,
  currentDialog: null,
  currentStatement: null,
  currentSentence: null
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

const getCurrentEpisode = state => state.get('currentEpisode');
const getCurrentDialog = state => state.get('currentDialog');
const getCurrentStatement = state => state.get('currentStatement');
const getCurrentSentence = state => state.get('currentSentence');

export const selectors = {
  getCurrentEpisode,
  getCurrentDialog,
  getCurrentStatement,
  getCurrentSentence
};
