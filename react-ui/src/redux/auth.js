import { Api } from '../helpers/api';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import isEmpty from 'lodash/isEmpty';
import { Map } from 'immutable';

const api = new Api();

// Action Types
export const types = {
  SET_CURRENT_USER: 'AUTH/SET_CURRENT_USER'
};

// Reducer
export const INITIAL_STATE = Map({
  isAuthenticated: false,
  user: {}
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return state
        .set('isAuthenticated', !isEmpty(action.user))
        .set('user', action.user);
    default:
      return state;
  }
}

// Action Creators
export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function login(data) {
  return dispatch => {
    return api.post('/auth', data)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
      });
  };
}

// Selectors
const duckState = state => state.get('auth');
export const getCurrentUserId = state => duckState(state).get('user').id;
export const getIsAuthenticated = state => duckState(state).get('isAuthenticated');
