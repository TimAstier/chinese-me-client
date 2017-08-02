import { Map } from 'immutable';

// Action types

export const types = {
  SET: 'ui/SET',
  OPEN_MODAL: 'ui/OPEN_MODAL',
  CLOSE_MODAL: 'ui/CLOSE_MODAL'
};

// Reducer
export const INITIAL_STATE = Map({
  nextButton: false,
  skipButton: true,
  openModal: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET:
      return state.set(action.payload.attribute, action.payload.value);
    case types.OPEN_MODAL:
      return state.set('openModal', true);
    case types.CLOSE_MODAL:
      return state.set('openModal', false);
    default: return state;
  }
}

// Action Creators

const set = (attribute, value) => ({
  type: types.SET,
  payload: { attribute, value }
});

const openModal = () => ({ type: types.OPEN_MODAL });
const closeModal = () => ({ type: types.CLOSE_MODAL });

export const actions = {
  set,
  openModal,
  closeModal
};

// Selectors

const getNextButton = state => state.get('nextButton');
const getSkipButton = state => state.get('skipButton');
const getOpenModal = state => state.get('openModal');

export const selectors = {
  getNextButton,
  getSkipButton,
  getOpenModal
};
