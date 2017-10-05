import { Map } from 'immutable';

// Types

export const types = {
  SET: 'ui/SET',
  OPEN_MODAL: 'ui/OPEN_MODAL',
  CLOSE_MODAL: 'ui/CLOSE_MODAL',
  OPEN_FEEDBACK_MODAL: 'ui/OPEN_FEEDBACK_MODAL',
  CLOSE_FEEDBACK_MODAL: 'ui/CLOSE_FEEDBACK_MODAL',
  OPEN_MAP_MODAL: 'ui/OPEN_MAP_MODAL',
  CLOSE_MAP_MODAL: 'ui/CLOSE_MAP_MODAL',
  UPDATE_FEEDBACK_STATUS: 'ui/UPDATE_FEEDBACK_STATUS'
};

// Reducer

export const INITIAL_STATE = Map({
  nextButton: false,
  skipButton: true,
  openModal: false,
  playAudioButton: false,
  openFeedbackModal: false,
  feedbackStatus: 'writing',
  openMapModal: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET:
      return state.set(action.payload.attribute, action.payload.value);
    case types.OPEN_MODAL:
      return state.set('openModal', true);
    case types.CLOSE_MODAL:
      return state.set('openModal', false);
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
    default: return state;
  }
}

// Actions

const set = (attribute, value) => ({
  type: types.SET,
  payload: { attribute, value }
});
const openModal = () => ({ type: types.OPEN_MODAL });
const closeModal = () => ({ type: types.CLOSE_MODAL });
const openFeedbackModal = () => ({ type: types.OPEN_FEEDBACK_MODAL });
const closeFeedbackModal = () => ({ type: types.CLOSE_FEEDBACK_MODAL });
const updateFeedbackStatus = status => ({
  type: types.UPDATE_FEEDBACK_STATUS,
  payload: status
});
const openMapModal = () => ({ type: types.OPEN_MAP_MODAL });
const closeMapModal = () => ({ type: types.CLOSE_MAP_MODAL });

export const actions = {
  set,
  openModal,
  closeModal,
  openFeedbackModal,
  closeFeedbackModal,
  updateFeedbackStatus,
  openMapModal,
  closeMapModal
};

// Selectors

const getNextButton = state => state.get('nextButton');
const getSkipButton = state => state.get('skipButton');
const getOpenModal = state => state.get('openModal');
const getPlayAudioButton = state => state.get('playAudioButton');
const getOpenFeedbackModal = state => state.get('openFeedbackModal');
const getFeedbackStatus = state => state.get('feedbackStatus');
const getOpenMapModal = state => state.get('openMapModal');

export const selectors = {
  getNextButton,
  getSkipButton,
  getOpenModal,
  getPlayAudioButton,
  getOpenFeedbackModal,
  getFeedbackStatus,
  getOpenMapModal
};
