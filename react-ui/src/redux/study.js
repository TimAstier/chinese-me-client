import Immutable from 'immutable';

// Action Types

export const types = {
  SET: 'study/SET',
  NEXT: 'study/NEXT',
  SKIP: 'study/SKIP',
  NEXT_SENTENCE: 'study/NEXT_SENTENCE',
  PREVIOUS_SENTENCE: 'study/PREVIOUS_SENTENCE',
  PLAY_SENTENCE: 'study/PLAY_SENTENCE',
  STOP_SENTENCE: 'study/STOP_SENTENCE',
  SWITCH_STATEMENT: 'study/SWITCH_STATEMENT',
  ASK_QUESTION: 'study/ASK_QUESTION',
  DISPLAY_EPISODE_OVERVIEW: 'study/DISPLAY_EPISODE_OVERVIEW',
  EXIT: 'study/EXIT'
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
const next = () => ({ type: types.NEXT });
const skip = () => ({ type: types.SKIP });
const nextSentence = () => ({ type: types.NEXT_SENTENCE });
const previousSentence = () => ({ type: types.PREVIOUS_SENTENCE });
const playSentence = () => ({ type: types.PLAY_SENTENCE });
const stopSentence = () => ({ type: types.STOP_SENTENCE });
const switchStatement = (statementId) => {
  return {
    type: types.SWITCH_STATEMENT,
    payload: { id: statementId }
  };
};
const askQuestion = () => ({ type: types.ASK_QUESTION });
const displayEpisodeOverview = () => ({ type: types.DISPLAY_EPISODE_OVERVIEW });
const exit = () => ({ type: types.EXIT });

export const actions = {
  set,
  next,
  skip,
  nextSentence,
  previousSentence,
  playSentence,
  stopSentence,
  switchStatement,
  askQuestion,
  displayEpisodeOverview,
  exit
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
