import { fromJS } from 'immutable';
import { EventTypes } from 'redux-segment';

// Types

export const types = {
  SET: 'settings/SET',
  CLEAR: 'settings/CLEAR'
};

// Reducer

const INITIAL_STATE = fromJS({
  initialized: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET:
      return state.merge({
        initialized: true,
        ...action.payload.settings
      });
    case types.CLEAR:
      return INITIAL_STATE;
    default: return state;
  }
}

// Actions

const set = (userId, settings) => ({
  type: types.SET,
  payload: { settings },
  meta: !userId ? undefined : {
    analytics: {
      eventType: EventTypes.identify,
      eventPayload: {
        userId,
        traits: {
          // Segment reserved traits: https://segment.com/docs/spec/identify/
          birthday: settings.birthdate,
          firstName: settings.givenName,
          lastName: settings.familyName,
          gender: settings.gender,
          // custom traits
          nationality: settings.nationality,
          motherTongue: settings.motherTongue,
          otherLanguage: settings.otherLanguage,
          reasonLearnChinese: settings.reasonLearnChinese,
          chineseFamilyName: settings.chineseFamilyName,
          chineseGivenName: settings.chineseGivenName
        }
      }
    }
  }
});

const clear = () => ({
  type: types.CLEAR
});

export const actions = {
  set,
  clear
};

// Selectors

const getInitialized = state => state.get('initialized');
const getSettings = state => state;

export const selectors = {
  getInitialized,
  getSettings
};
