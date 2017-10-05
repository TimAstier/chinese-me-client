import isEmpty from 'lodash/isEmpty';
import { fromJS } from 'immutable';

// Types

export const types = {
  SET_CURRENT_USER: 'auth/SET_CURRENT_USER'
};

// Reducer

export const INITIAL_STATE = fromJS({
  isAuthenticated: false,
  user: {
    id: 0,
    email: ''
  }
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

export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    user
  };
}

// Selectors

const getCurrentUserId = state => state.getIn(['user', 'id']);
const getCurrentUserEmail = state => state.getIn(['user', 'email']);
const getIsAuthenticated = state => state.get('isAuthenticated');

export const selectors = {
  getCurrentUserId,
  getCurrentUserEmail,
  getIsAuthenticated
};
