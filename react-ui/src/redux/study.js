import Immutable from 'immutable';

// Action Types

export const types = {
  SET_CURRENT_EPISODE_ID: 'study/SET_CURRENT_EPISODE_ID',
  SET_CURRENT_DIALOG_ID: 'study/SET_CURRENT_DIALOG_ID',
  SET_CURRENT_STATEMENT_ID: 'study/SET_CURRENT_STATEMENT_ID',
  SET_CURRENT_SENTENCE_ID: 'study/SET_CURRENT_SENTENCE_ID',
  START_EPISODE: 'study/START_EPISODE',
  SET_DIALOG_MODE: 'study/SET_DIALOG_MODE',
  SET_TITLE: 'study/SET_TITLE',
  SET_PART_NUMBER: 'study/SET_PART_NUMBER',
  SET_CHOSEN_AVATAR_ID: 'study/CHOSEN_AVATAR_ID',
  SET_CURRENT_CHARACTER_ID: 'study/SET_CURRENT_CHARACTER_ID',
  INIT_SCREEN: 'study/INIT_SCREEN',
  SET_INITIALIZED: 'study/SET_INITIALIZED'
};

// Reducers

export const INITIAL_STATE = Immutable.Map({
  currentEpisodeId: null,
  currentDialogId: null,
  currentStatementId: null,
  currentSentenceId: null,
  dialogMode: '',
  title: '',
  partNumber: null,
  chosenAvatarId: null,
  currentCharacterId: null,
  initialized: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_CURRENT_EPISODE_ID:
    case types.START_EPISODE:
      return state.set('currentEpisodeId', action.payload.id);
    case types.SET_CURRENT_DIALOG_ID:
      return state.set('currentDialogId', action.payload.id);
    case types.SET_CURRENT_STATEMENT_ID:
      return state.set('currentStatementId', action.payload.id);
    case types.SET_CURRENT_SENTENCE_ID:
      return state.set('currentSentenceId', action.payload.id);
    case types.SET_DIALOG_MODE:
      return state.set('dialogMode', action.payload.mode);
    case types.SET_TITLE:
      return state.set('title', action.payload.title);
    case types.SET_PART_NUMBER:
      return state.set('partNumber', action.payload.partNumber);
    case types.SET_CHOSEN_AVATAR_ID:
      return state.set('chosenAvatarId', action.payload.id);
    case types.SET_CURRENT_CHARACTER_ID:
      return state.set('currentCharacterId', action.payload.id);
    case types.INIT_SCREEN:
      return state.set('initialized', false);
    case types.SET_INITIALIZED:
      return state.set('initialized', action.payload);
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

const setDialogMode = mode => {
  const modes = ['listen', 'explore', 'roleplay'];
  if (modes.findIndex(e => e === mode) === -1) {
    console.log('Unknown dialog mode'); // eslint-disable-line no-console
    return {};
  }
  return {
    type: types.SET_DIALOG_MODE,
    payload: { mode }
  };
};

const setTitle = title => {
  const titles = ['Characters', 'Grammar', 'Dialog', 'Review', 'Final Test'];
  if (titles.findIndex(e => e === title) === -1) {
    console.log('Unknown title'); // eslint-disable-line no-console
    return {};
  }
  return {
    type: types.SET_TITLE,
    payload: { title }
  };
};

const setPartNumber = partNumber => ({
  type: types.SET_PART_NUMBER,
  payload: { partNumber }
});

const setChosenAvatarId = id => ({
  type: types.SET_CHOSEN_AVATAR_ID,
  payload: { id }
});

const setCurrentCharacterId = id => ({
  type: types.SET_CURRENT_CHARACTER_ID,
  payload: { id }
});

const setInitialized = payload => ({
  type: types.SET_INITIALIZED,
  payload
});

const initScreen = url => ({
  type: types.INIT_SCREEN,
  payload: { url }
});

export const actions = {
  setCurrentEpisodeId,
  setCurrentDialogId,
  setCurrentStatementId,
  setCurrentSentenceId,
  startEpisode,
  setDialogMode,
  setTitle,
  setPartNumber,
  setChosenAvatarId,
  setCurrentCharacterId,
  setInitialized,
  initScreen
};

// Selectors

const getCurrentEpisodeId = state => state.get('currentEpisodeId');
const getCurrentDialogId = state => state.get('currentDialogId');
const getCurrentStatementId = state => state.get('currentStatementId');
const getCurrentSentenceId = state => state.get('currentSentenceId');
const getDialogMode = state => state.get('dialogMode');
const getTitle = state => state.get('title');
const getPartNumber = state => state.get('partNumber');
const getChosenAvatarId = state => state.get('chosenAvatarId');
const getCurrentCharacterId = state => state.get('currentCharacterId');
const getInitialized = state => state.get('initialized');

export const selectors = {
  getCurrentEpisodeId,
  getCurrentDialogId,
  getCurrentStatementId,
  getCurrentSentenceId,
  getDialogMode,
  getTitle,
  getPartNumber,
  getChosenAvatarId,
  getCurrentCharacterId,
  getInitialized
};
