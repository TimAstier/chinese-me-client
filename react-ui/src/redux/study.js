import Immutable from 'immutable';

// Action Types

export const types = {
  SET_CURRENT_EPISODE_ID: 'study/SET_CURRENT_EPISODE_ID',
  SET_CURRENT_DIALOG_ID: 'study/SET_CURRENT_DIALOG_ID',
  SET_CURRENT_STATEMENT_ID: 'study/SET_CURRENT_STATEMENT_ID',
  SET_CURRENT_SENTENCE_ID: 'study/SET_CURRENT_SENTENCE_ID',
  START_EPISODE: 'study/START_EPISODE',
  SWITCH_STATEMENT: 'study/SWITCH_STATEMENT',
  SET_DIALOG_MODE: 'study/SET_DIALOG_MODE'
};

// Reducers

export const INITIAL_STATE = Immutable.Map({
  currentEpisodeId: null,
  currentDialogId: null,
  currentStatementId: null,
  currentSentenceId: null,
  dialogMode: ''
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_CURRENT_EPISODE_ID:
    case types.START_EPISODE:
      return state.set('currentEpisodeId', action.payload.id);
    case types.SET_CURRENT_DIALOG_ID:
      return state.set('currentDialogId', action.payload.id);
    case types.SET_CURRENT_STATEMENT_ID:
    case types.SWITCH_STATEMENT:
      return state.set('currentStatementId', action.payload.id);
    case types.SET_CURRENT_SENTENCE_ID:
      return state.set('currentSentenceId', action.payload.id);
    case types.SET_DIALOG_MODE:
      return state.set('dialogMode', action.payload.mode);
    default: return state;
  }
}

// Action Creators

const setCurrentEpisodeId = id => {
  return {
    type: types.SET_CURRENT_EPISODE_ID,
    payload: { id }
  };
};

const setCurrentDialogId = id => {
  return {
    type: types.SET_CURRENT_DIALOG_ID,
    payload: { id }
  };
};

const setCurrentStatementId = id => {
  return {
    type: types.SET_CURRENT_STATEMENT_ID,
    payload: { id }
  };
};

const setCurrentSentenceId = id => {
  return {
    type: types.SET_CURRENT_SENTENCE_ID,
    payload: { id }
  };
};

const startEpisode = id => ({
  type: types.START_EPISODE,
  payload: { id }
});

const switchStatement = statementId => ({
  type: types.SWITCH_STATEMENT,
  payload: { id: statementId }
});

// 'listen', 'explore', 'rolePlay'
const setDialogMode = mode => ({
  type: types.SET_DIALOG_MODE,
  payload: { mode }
});

export const actions = {
  setCurrentEpisodeId,
  setCurrentDialogId,
  setCurrentStatementId,
  setCurrentSentenceId,
  startEpisode,
  switchStatement,
  setDialogMode
};

// Selectors

const getCurrentEpisodeId = state => state.get('currentEpisodeId');
const getCurrentDialogId = state => state.get('currentDialogId');
const getCurrentStatementId = state => state.get('currentStatementId');
const getCurrentSentenceId = state => state.get('currentSentenceId');
const getDialogMode = state => state.get('dialogMode');

export const selectors = {
  getCurrentEpisodeId,
  getCurrentDialogId,
  getCurrentStatementId,
  getCurrentSentenceId,
  getDialogMode
};
