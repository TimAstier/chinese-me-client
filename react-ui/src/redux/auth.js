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

const setCurrentUser = (user, trackLogin) => {
  // only track "Logged in" even when coming from Login saga
  const identify = {
    eventType: EventTypes.identify,
    eventPayload: {
      userId: user.id,
      traits: {
        email: user.email,
        createdAt: user.createdAt
      }
    },
  };
  const loggedIn = {
    eventType: EventTypes.track,
    eventPayload: {
      event: 'Logged in'
    }
  };
  return {
    type: types.SET_CURRENT_USER,
    user,
    meta: {
      analytics: trackLogin ? [ identify, loggedIn ] : identify,
    }
  };
};

export const actions = {
  setCurrentUser
};

// Selectors

const getCurrentUserId = state => state.getIn(['user', 'id']);
const getCurrentUserEmail = state => state.getIn(['user', 'email']);
const getCurrentUserCreatedAt = state => state.getIn(['user', 'createdAt']);
const getIsAuthenticated = state => state.get('isAuthenticated');

export const selectors = {
  getCurrentUserId,
  getCurrentUserEmail,
  getIsAuthenticated,
  getCurrentUserCreatedAt
};
