import Immutable from 'immutable';
import { types as sagaTypes } from '../sagas/actions';
import { types as practiceTypes } from '../redux/practice';
import { types as examTypes } from '../redux/exam';

// Action Types

export const types = {
  CLEAR: 'study/CLEAR',
  SET_CURRENT_SEASON_ID: 'study/SET_CURRENT_SEASON_ID',
  SET_CURRENT_EPISODE_ID: 'study/SET_CURRENT_EPISODE_ID',
  SET_CURRENT_DIALOG_ID: 'study/SET_CURRENT_DIALOG_ID',
  SET_CURRENT_EXERCISE_ID: 'study/SET_CURRENT_EXERCISE_ID',
  SET_CURRENT_STATEMENT_ID: 'study/SET_CURRENT_STATEMENT_ID',
  SET_CURRENT_SENTENCE_ID: 'study/SET_CURRENT_SENTENCE_ID',
  SET_CURRENT_VIDEO_ID: 'study/SET_CURRENT_VIDEO_ID',
  SET_DIALOG_MODE: 'study/SET_DIALOG_MODE',
  SET_CHOSEN_AVATAR_ID: 'study/CHOSEN_AVATAR_ID',
  SET_CURRENT_CHARACTER_ID: 'study/SET_CURRENT_CHARACTER_ID',
  INIT_SCREEN: 'study/INIT_SCREEN',
  SET_INITIALIZED: 'study/SET_INITIALIZED',
  SET_PAUSED: 'study/SET_PAUSED'
};

// Reducers

export const INITIAL_STATE = Immutable.Map({
  currentSeasonId: null,
  currentEpisodeId: null,
  currentCharacterId: null,
  currentExerciseId: null,
  currentDialogId: null,
  currentStatementId: null,
  currentSentenceId: null,
  currentWordId: null,
  currentVideoId: null,
  dialogMode: '',
  partNumber: null,
  chosenAvatarId: null,
  initialized: false,
  paused: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.CLEAR:
      return INITIAL_STATE;
    case types.SET_CURRENT_SEASON_ID:
      return state.set('currentSeasonId', action.payload.id);
    case types.SET_CURRENT_EPISODE_ID:
      return state.set('currentEpisodeId', action.payload.id);
    case types.SET_CURRENT_DIALOG_ID:
      return state.set('currentDialogId', action.payload.id);
    case types.SET_CURRENT_EXERCISE_ID:
      return state.set('currentExerciseId', action.payload.id);
    case types.SET_CURRENT_STATEMENT_ID:
      return state.set('currentStatementId', action.payload.id);
    case types.SET_CURRENT_SENTENCE_ID:
      return state.set('currentSentenceId', action.payload.id);
    case sagaTypes.NEW_WORD_LINK_CLICKED:
      return state.set('currentWordId', action.payload.id);
    case types.SET_DIALOG_MODE:
      return state.set('dialogMode', action.payload.mode);
    case types.SET_CHOSEN_AVATAR_ID:
      return state.set('chosenAvatarId', action.payload.id);
    case types.SET_CURRENT_CHARACTER_ID:
      return state.set('currentCharacterId', action.payload.id);
    case types.SET_CURRENT_VIDEO_ID:
      return state.set('currentVideoId', action.payload.id);
    case types.SET_INITIALIZED:
      return state.set('initialized', action.payload);
    case types.SET_PAUSED:
      return state.set('paused', action.payload);
    case sagaTypes.PAUSE:
      return state.set('paused', !state.get('paused'));
    case practiceTypes.CLEAN:
    case examTypes.CLEAN:
      return state.set('currentExerciseId', null);
    default:
      return state;
  }
}

// Action Creators

const setCurrentSeasonId = id => {
  return {
    type: types.SET_CURRENT_SEASON_ID,
    payload: { id }
  };
};

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

const setCurrentExerciseId = id => {
  return {
    type: types.SET_CURRENT_EXERCISE_ID,
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

const setCurrentWordId = id => {
  return {
    type: types.SET_CURRENT_WORD_ID,
    payload: { id }
  };
};

const setCurrentVideoId = id => {
  return {
    type: types.SET_CURRENT_VIDEO_ID,
    payload: { id }
  };
};

const setDialogMode = mode => {
  const modes = ['watch', 'explore', 'roleplay', 'choserole'];
  if (modes.findIndex(e => e === mode) === -1) {
    throw new Error('Unknown dialog mode');
  }
  return {
    type: types.SET_DIALOG_MODE,
    payload: { mode }
  };
};

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

const setPaused = payload => ({
  type: types.SET_PAUSED,
  payload
});

export const actions = {
  setCurrentSeasonId,
  setCurrentEpisodeId,
  setCurrentDialogId,
  setCurrentExerciseId,
  setCurrentStatementId,
  setCurrentSentenceId,
  setCurrentWordId,
  setDialogMode,
  setChosenAvatarId,
  setCurrentCharacterId,
  setInitialized,
  setPaused,
  setCurrentVideoId
};

// Selectors

const getCurrentSeasonId = state => state.get('currentSeasonId');
const getCurrentEpisodeId = state => state.get('currentEpisodeId');
const getCurrentDialogId = state => state.get('currentDialogId');
const getCurrentExerciseId = state => state.get('currentExerciseId');
const getCurrentStatementId = state => state.get('currentStatementId');
const getCurrentSentenceId = state => state.get('currentSentenceId');
const getCurrentWordId = state => state.get('currentWordId');
const getDialogMode = state => state.get('dialogMode');
const getChosenAvatarId = state => state.get('chosenAvatarId');
const getCurrentCharacterId = state => state.get('currentCharacterId');
const getInitialized = state => state.get('initialized');
const getPaused = state => state.get('paused');
const getCurrentVideoId = state => state.get('currentVideoId');

export const selectors = {
  getCurrentSeasonId,
  getCurrentEpisodeId,
  getCurrentDialogId,
  getCurrentExerciseId,
  getCurrentStatementId,
  getCurrentSentenceId,
  getCurrentWordId,
  getDialogMode,
  getChosenAvatarId,
  getCurrentCharacterId,
  getInitialized,
  getPaused,
  getCurrentVideoId
};
