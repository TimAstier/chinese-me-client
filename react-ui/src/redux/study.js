import Immutable from 'immutable';
import { types as sagaTypes } from '../sagas/actions';

// Action Types

export const types = {
  CLEAR: 'study/CLEAR',
  SET_CURRENT_EPISODE_ID: 'study/SET_CURRENT_EPISODE_ID',
  SET_CURRENT_GRAMMAR_ID: 'study/SET_CURRENT_GRAMMAR_ID',
  SET_CURRENT_DIALOG_ID: 'study/SET_CURRENT_DIALOG_ID',
  SET_CURRENT_STATEMENT_ID: 'study/SET_CURRENT_STATEMENT_ID',
  SET_CURRENT_SENTENCE_ID: 'study/SET_CURRENT_SENTENCE_ID',
  SET_CURRENT_MULTIPLE_CHOICE_ID: 'study/SET_CURRENT_MULTIPLE_CHOICE_ID',
  SET_CURRENT_AUDIO_TO_TEXT_ID: 'study/SET_CURRENT_AUDIO_TO_TEXT_ID',
  START_EPISODE: 'study/START_EPISODE',
  SET_DIALOG_MODE: 'study/SET_DIALOG_MODE',
  SET_PART_NUMBER: 'study/SET_PART_NUMBER',
  SET_CHOSEN_AVATAR_ID: 'study/CHOSEN_AVATAR_ID',
  SET_CURRENT_CHARACTER_ID: 'study/SET_CURRENT_CHARACTER_ID',
  INIT_SCREEN: 'study/INIT_SCREEN',
  SET_INITIALIZED: 'study/SET_INITIALIZED'
};

// Reducers

export const INITIAL_STATE = Immutable.Map({
  currentEpisodeId: null,
  currentCharacterId: null,
  currentGrammarId: null,
  currentDialogId: null,
  currentStatementId: null,
  currentSentenceId: null,
  currentMultipleChoiceId: null,
  currentAudioToTextId: null,
  dialogMode: '',
  partNumber: null,
  chosenAvatarId: null,
  initialized: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.CLEAR:
    case sagaTypes.EXIT:
      return INITIAL_STATE;
    case types.SET_CURRENT_EPISODE_ID:
    case types.START_EPISODE:
      return state.set('currentEpisodeId', action.payload.id);
    case types.SET_CURRENT_DIALOG_ID:
      return state.set('currentDialogId', action.payload.id);
    case types.SET_CURRENT_GRAMMAR_ID:
      return state.set('currentGrammarId', action.payload.id);
    case types.SET_CURRENT_STATEMENT_ID:
      return state.set('currentStatementId', action.payload.id);
    case types.SET_CURRENT_SENTENCE_ID:
      return state.set('currentSentenceId', action.payload.id);
    case types.SET_CURRENT_MULTIPLE_CHOICE_ID:
      return state.set('currentMultipleChoiceId', action.payload.id);
    case types.SET_CURRENT_AUDIO_TO_TEXT_ID:
      return state.set('currentAudioToTextId', action.payload.id);
    case types.SET_DIALOG_MODE:
      return state.set('dialogMode', action.payload.mode);
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

const setCurrentGrammarId = id => {
  return {
    type: types.SET_CURRENT_GRAMMAR_ID,
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

const setCurrentMultipleChoiceId = id => {
  return {
    type: types.SET_CURRENT_MULTIPLE_CHOICE_ID,
    payload: { id }
  };
};

const setCurrentAudioToTextId = id => {
  return {
    type: types.SET_CURRENT_AUDIO_TO_TEXT_ID,
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
  setCurrentGrammarId,
  setCurrentStatementId,
  setCurrentSentenceId,
  setCurrentMultipleChoiceId,
  setCurrentAudioToTextId,
  startEpisode,
  setDialogMode,
  setPartNumber,
  setChosenAvatarId,
  setCurrentCharacterId,
  setInitialized,
  initScreen
};

// Selectors

const getCurrentEpisodeId = state => state.get('currentEpisodeId');
const getCurrentDialogId = state => state.get('currentDialogId');
const getCurrentGrammarId = state => state.get('currentGrammarId');
const getCurrentStatementId = state => state.get('currentStatementId');
const getCurrentSentenceId = state => state.get('currentSentenceId');
const getCurrentMultipleChoiceId = state => state.get('currentMultipleChoiceId');
const getCurrentAudioToTextId = state => state.get('currentAudioToTextId');
const getDialogMode = state => state.get('dialogMode');
const getPartNumber = state => state.get('partNumber');
const getChosenAvatarId = state => state.get('chosenAvatarId');
const getCurrentCharacterId = state => state.get('currentCharacterId');
const getInitialized = state => state.get('initialized');

export const selectors = {
  getCurrentEpisodeId,
  getCurrentDialogId,
  getCurrentGrammarId,
  getCurrentStatementId,
  getCurrentSentenceId,
  getCurrentMultipleChoiceId,
  getCurrentAudioToTextId,
  getDialogMode,
  getPartNumber,
  getChosenAvatarId,
  getCurrentCharacterId,
  getInitialized
};
