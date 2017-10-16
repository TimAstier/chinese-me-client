import isEmpty from 'lodash/isEmpty';
import { fromJS } from 'immutable';
import { EventTypes } from 'redux-segment';

// Types

export const types = {
  SET_CURRENT_USER: 'auth/SET_CURRENT_USER'
};

// Reducer

export const INITIAL_STATE = fromJS({
  isAuthenticated: false,
  user: {} // id, email, iat, createdAt
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return state
        .set('isAuthenticated', !isEmpty(action.user))
        .set('user', fromJS(action.user));
    default:
      return state;
  }
}

// Actions

const setCurrentUser = user => {
  return {
    type: types.SET_CURRENT_USER,
    user,
    meta: {
      analytics: [{
        eventType: EventTypes.identify,
        eventPayload: {
          userId: user.id,
          traits: {
            email: user.email,
            createdAt: user.createdAt,
            settings: user.settings
          }
        },
      }, {
        eventType: EventTypes.track,
        eventPayload: {
          event: 'User Logged in'
        }
      }],
    },
  };
};

export const actions = {
  setCurrentUser
};

// Selectors

const getCurrentUserId = state => state.getIn(['user', 'id']);
const getCurrentUserEmail = state => state.getIn(['user', 'email']);
const getIsAuthenticated = state => state.get('isAuthenticated');

export const selectors = {
  getCurrentUserId,
  getCurrentUserEmail,
  getIsAuthenticated
};
