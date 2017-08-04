import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects';
import { types } from './actions';
import Api from '../utils/api';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from '../redux/auth';
import { push } from 'react-router-redux';

function* login(token) {
  localStorage.setItem('jwtToken', token);
  setAuthorizationToken(token);
  yield put(setCurrentUser(jwtDecode(token)));
}

function* logout() {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
  yield put(setCurrentUser({}));
}

function* authorize(params) {
  const { values, resolve, reject } = params;
  const email = values.get('email');
  const password = values.get('password');
  try {
    const response = yield call(Api.post, '/auth', { email, password });
    const token = response.data.token;
    yield call(login, token);
    resolve();
    yield put(push('/select'));
  } catch (error) {
    reject();
    yield put({type: 'LOGIN_ERROR', error});
    // TODO: handle errors
  } finally {
    if (yield cancelled()) {
      // ... put special cancellation handling code here
      // TODO: handle errors
    }
  }
}

export function* loginFlow() {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload: { values, resolve, reject } } = yield take(types.LOGIN_REQUEST);
    const task = yield fork(authorize, { values, resolve, reject });
    const action = yield take(['LOGOUT', 'LOGIN_ERROR']);
    if (action.type === 'LOGOUT') {
      yield cancel(task);
    }
    yield call(logout);
  }
}
