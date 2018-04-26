import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { default as settingConstants } from '../constants/settings';
import wordings from '../constants/wordings';

// Types

export const types = {
  SET_SETTING: 'question/SET_SETTING',
  SET_INITIALIZED: 'question/SET_INITIALIZED',
  INCREMENT_CURRENT_INDEX: 'question/INCREMENT_CURRENT_INDEX',
  INIT: 'question/INIT',
  SET_SAVING: 'question/SET_SAVING',
  SET_STATUS: 'question/SET_STATUS'
};

// Reducer

const INITIAL_STATE = Map({
  initialized: false,
  setting: '',
  currentIndex: 0,
  saving: false,
  status: 'input' // 'input' or 'result'
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.INIT:
      return INITIAL_STATE;
    case types.SET_SETTING:
      return state.set('setting', action.payload.setting);
    case types.SET_INITIALIZED:
      return state.set('initialized', action.payload.initialized);
    case types.INCREMENT_CURRENT_INDEX:
      return state.set('currentIndex', state.get('currentIndex') + 1);
    case types.SET_SAVING:
      return state.set('saving', action.payload.saving);
    case types.SET_STATUS:
      return state.set('status', action.payload.status);
    default: return state;
  }
}

// Actions

const init = () => ({
  type: types.INIT
});

const setSetting = setting => ({
  type: types.SET_SETTING,
  payload: { setting }
});

const setInitialized = initialized => ({
  type: types.SET_INITIALIZED,
  payload: { initialized }
});

const incrementCurrentIndex = () => ({
  type: types.INCREMENT_CURRENT_INDEX
});

const setSaving = saving => ({
  type: types.SET_SAVING,
  payload: { saving }
});

const setStatus = status => ({
  type: types.SET_STATUS,
  payload: { status }
});

export const actions = {
  init,
  setSetting,
  setInitialized,
  incrementCurrentIndex,
  setSaving,
  setStatus
};

// Selectors

const getSetting = state => state.get('setting');
const getInitialized = state => state.get('initialized');
const getCurrentIndex = state => state.get('currentIndex');
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
const getSaving = state => state.get('saving');
const getTitle = createSelector(
  getSetting,
  setting => {
    if (!setting) {
      return null;
    }
    return wordings[settingConstants[setting].location].title;
  }
);
const getQuestionIntro = createSelector(
  getSetting,
  setting => {
    if (!setting) {
      return null;
    }
    return wordings[settingConstants[setting].location].questionIntro;
  }
);
const getStatus = state => state.get('status');

export const selectors = {
  getSetting,
  getInitialized,
  getCurrentIndex,
  getType,
  getSaving,
  getTitle,
  getQuestionIntro,
  getStatus
};
