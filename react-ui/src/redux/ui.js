import { Map } from 'immutable';
import { types as sagaTypes } from '../sagas/actions';

// Types

export const types = {
  SET: 'ui/SET',
  OPEN_HINT_MODAL: 'ui/OPEN_HINT_MODAL',
  CLOSE_HINT_MODAL: 'ui/CLOSE_HINT_MODAL',
  OPEN_FEEDBACK_MODAL: 'ui/OPEN_FEEDBACK_MODAL',
  CLOSE_FEEDBACK_MODAL: 'ui/CLOSE_FEEDBACK_MODAL',
  OPEN_MAP_MODAL: 'ui/OPEN_MAP_MODAL',
  CLOSE_MAP_MODAL: 'ui/CLOSE_MAP_MODAL',
  UPDATE_FEEDBACK_STATUS: 'ui/UPDATE_FEEDBACK_STATUS',
  OPEN_QUESTION_MODAL: 'ui/OPEN_QUESTION_MODAL',
  CLOSE_QUESTION_MODAL: 'ui/CLOSE_QUESTION_MODAL',
  CLOSE_WORD_MODAL: 'ui/CLOSE_WORD_MODAL',
  SET_DEFAULT_EPISODE_SCREEN_UI: 'ui/SET_DEFAULT_EPISODE_SCREEN_UI'
};

// Reducer

export const INITIAL_STATE = Map({
  nextButton: false,
  skipButton: true,
  openHintModal: false,
  playAudioButton: false,
  pauseButton: false,
  hanziAgainButton: false,
  openFeedbackModal: false,
  feedbackStatus: 'writing',
  openMapModal: false,
  openQuestionModal: false,
  openWordModal: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET:
      return state.set(action.payload.attribute, action.payload.value);
    case types.OPEN_HINT_MODAL:
      return state.set('openHintModal', true);
    case types.CLOSE_HINT_MODAL:
      return state.set('openHintModal', false);
    case types.OPEN_FEEDBACK_MODAL:
      return state.merge({
        'feedbackStatus': 'writing',
        'openFeedbackModal': true
      });
    case types.CLOSE_FEEDBACK_MODAL:
      return state.set('openFeedbackModal', false);
    case types.UPDATE_FEEDBACK_STATUS:
      return state.set('feedbackStatus', action.payload);
    case types.OPEN_MAP_MODAL:
      return state.set('openMapModal', true);
    case types.CLOSE_MAP_MODAL:
      return state.set('openMapModal', false);
    case types.OPEN_QUESTION_MODAL:
      return state.set('openQuestionModal', true);
    case types.CLOSE_QUESTION_MODAL:
      return state.set('openQuestionModal', false);
    case sagaTypes.NEW_WORD_LINK_CLICKED:
      return state.set('openWordModal', true);
    case types.CLOSE_WORD_MODAL:
      return state.set('openWordModal', false);
    case types.SET_DEFAULT_EPISODE_SCREEN_UI:
      return state.merge({
        skipButton: true,
        nextButton: false,
        playAudioButton: false,
        pauseButton: false,
        hanziAgainButton: false,
        openHintModal: false
      });
    default: return state;
  }
}

// Actions

const set = (attribute, value) => ({
  type: types.SET,
  payload: { attribute, value }
});
const openHintModal = () => ({ type: types.OPEN_HINT_MODAL });
const closeHintModal = () => ({ type: types.CLOSE_HINT_MODAL });
const openFeedbackModal = () => ({ type: types.OPEN_FEEDBACK_MODAL });
const closeFeedbackModal = () => ({ type: types.CLOSE_FEEDBACK_MODAL });
const updateFeedbackStatus = status => ({
  type: types.UPDATE_FEEDBACK_STATUS,
  payload: status
});
const openMapModal = () => ({ type: types.OPEN_MAP_MODAL });
const closeMapModal = () => ({ type: types.CLOSE_MAP_MODAL });
const openQuestionModal = () => ({ type: types.OPEN_QUESTION_MODAL });
const closeQuestionModal = () => ({ type: types.CLOSE_QUESTION_MODAL });
const openWordModal = () => ({ type: types.OPEN_WORD_MODAL });
const closeWordModal = () => ({ type: types.CLOSE_WORD_MODAL });
const setDefaultEpisodeScreenUi = () => ({
  type: types.SET_DEFAULT_EPISODE_SCREEN_UI
});

export const actions = {
  set,
  openHintModal,
  closeHintModal,
  openFeedbackModal,
  closeFeedbackModal,
  updateFeedbackStatus,
  openMapModal,
  closeMapModal,
  openQuestionModal,
  closeQuestionModal,
  openWordModal,
  closeWordModal,
  setDefaultEpisodeScreenUi
};

// Selectors

const getNextButton = state => state.get('nextButton');
const getSkipButton = state => state.get('skipButton');
const getOpenHintModal = state => state.get('openHintModal');
const getPlayAudioButton = state => state.get('playAudioButton');
const getPauseButton = state => state.get('pauseButton');
const getOpenFeedbackModal = state => state.get('openFeedbackModal');
const getFeedbackStatus = state => state.get('feedbackStatus');
const getOpenMapModal = state => state.get('openMapModal');
const getOpenQuestionModal = state => state.get('openQuestionModal');
const getOpenWordModal = state => state.get('openWordModal');
const getHanziAgainButton = state => state.get('hanziAgainButton');

export const selectors = {
  getNextButton,
  getSkipButton,
  getOpenHintModal,
  getPlayAudioButton,
  getPauseButton,
  getOpenFeedbackModal,
  getFeedbackStatus,
  getOpenMapModal,
  getOpenQuestionModal,
  getOpenWordModal,
  getHanziAgainButton
};
