import { fromJS } from 'immutable';

// Types

export const types = {
  AUTOPLAY_OFF: 'video/AUTOPLAY_OFF',
  AUTOPLAY_ON: 'video/AUTOPLAY_ON'
};

// Reducer

export const INITIAL_STATE = fromJS({
  autoPlay: true
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.AUTOPLAY_OFF:
      return state.set('autoPlay', false);
    case types.AUTOPLAY_ON:
      return state.set('autoPlay', true);
    default: return state;
  }
}

// Actions

const autoPlayOff = () => ({
  type: types.AUTOPLAY_OFF
});

const autoPlayOn = () => ({
  type: types.AUTOPLAY_ON
});

export const actions = {
  autoPlayOff,
  autoPlayOn
};

// Selectors

const getAutoPlay = state => state.get('autoPlay');

export const selectors = {
  getAutoPlay
};
