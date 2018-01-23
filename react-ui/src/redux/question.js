import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { default as settingConstants } from '../constants/settings';

// Types

export const types = {
  SET_SETTING: 'question/SET_SETTING'
};

// Reducer

const INITIAL_STATE = Map({
  setting: ''
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_SETTING: return state.set('setting', action.payload.setting);
    default: return state;
  }
}

// Actions

const setSetting = setting => ({
  type: types.SET_SETTING,
  payload: { setting }
});

export const actions = {
  setSetting
};

// Selectors

const getSetting = state => state.get('setting');
const getType = createSelector(
  getSetting,
  setting => {
    if (setting) {
      if (!settingConstants[setting]) {
        console.log('Error with setting constant');
        return '';
      }
      return settingConstants[setting].questionType;
    }
    return '';
  }
);

export const selectors = {
  getSetting,
  getType
};
