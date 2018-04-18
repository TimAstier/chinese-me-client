import { Map } from 'immutable';
import { types as sagaTypes } from '../sagas/actions';
import { EventTypes } from 'redux-segment';

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
  CLOSE_WORD_MODAL: 'ui/CLOSE_WORD_MODAL',
  SET_DEFAULT_EPISODE_SCREEN_UI: 'ui/SET_DEFAULT_EPISODE_SCREEN_UI',
  SET_CONTEXTUAL_TEXT: 'ui/SET_CONTEXTUAL_TEXT',
  SET_SCROLL_POSITION: 'ui/SET_SCROLL_POSITION'
};

// Reducer

export const INITIAL_STATE = Map({
  nextButton: false,
  openHintModal: false,
  playAudioButton: false,
  pauseButton: false,
  hanziAgainButton: false,
  openFeedbackModal: false,
  feedbackStatus: 'writing',
  openMapModal: false,
  openWordModal: false,
  scrollPosition: 0
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
    case sagaTypes.NEW_WORD_LINK_CLICKED:
      return state.set('openWordModal', true);
    case types.CLOSE_WORD_MODAL:
      return state.set('openWordModal', false);
    case types.SET_DEFAULT_EPISODE_SCREEN_UI:
      return state.merge({
        nextButton: false,
        playAudioButton: false,
        pauseButton: false,
        hanziAgainButton: false,
        openHintModal: false,
        openQuestionModal: false
      });
    case types.SET_SCROLL_POSITION:
      return state.set('scrollPosition', action.payload.position);
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
const openFeedbackModal = () => ({
  type: types.OPEN_FEEDBACK_MODAL,
  meta: {
    analytics: {
      eventType: EventTypes.track,
      eventPayload: {
        event: 'Opened Feedback Modal'
      }
    }
  }
});
const closeFeedbackModal = () => ({ type: types.CLOSE_FEEDBACK_MODAL });
const updateFeedbackStatus = status => ({
  type: types.UPDATE_FEEDBACK_STATUS,
  payload: status,
  meta: status !== 'sent' ? undefined : {
    analytics: {
      eventType: EventTypes.track,
      eventPayload: {
        event: 'Sent Feedback'
      }
    }
  }
});
const openMapModal = () => ({
  type: types.OPEN_MAP_MODAL,
  meta: {
    analytics: {
      eventType: EventTypes.track,
      eventPayload: {
        event: 'Opened TOC'
      }
    }
  }
});
const closeMapModal = () => ({ type: types.CLOSE_MAP_MODAL });
const openWordModal = () => ({ type: types.OPEN_WORD_MODAL });
const closeWordModal = () => ({ type: types.CLOSE_WORD_MODAL });
const setDefaultEpisodeScreenUi = () => ({
  type: types.SET_DEFAULT_EPISODE_SCREEN_UI
});
const setScrollPosition = position => ({
  type: types.SET_SCROLL_POSITION,
  payload: { position }
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
  openWordModal,
  closeWordModal,
  setDefaultEpisodeScreenUi,
  setScrollPosition
};

// Selectors

const getNextButton = state => state.get('nextButton');
const getOpenHintModal = state => state.get('openHintModal');
const getPlayAudioButton = state => state.get('playAudioButton');
const getPauseButton = state => state.get('pauseButton');
const getOpenFeedbackModal = state => state.get('openFeedbackModal');
const getFeedbackStatus = state => state.get('feedbackStatus');
const getOpenMapModal = state => state.get('openMapModal');
const getOpenWordModal = state => state.get('openWordModal');
const getHanziAgainButton = state => state.get('hanziAgainButton');
const getScrollPosition = state => state.get('scrollPosition');

export const selectors = {
  getNextButton,
  getOpenHintModal,
  getPlayAudioButton,
  getPauseButton,
  getOpenFeedbackModal,
  getFeedbackStatus,
  getOpenMapModal,
  getOpenWordModal,
  getHanziAgainButton,
  getScrollPosition
};
