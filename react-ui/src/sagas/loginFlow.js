import { take, call, put, cancelled } from 'redux-saga/effects';
import { types, actions } from './actions';
import Api from '../utils/api';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { actions as authActions } from '../redux/auth';
import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form/immutable';
import serverErrors from '../constants/serverErrors';
import { actions as settingsActions } from '../redux/settings';
import { actions as sagaActions } from './actions';
import { loadSettings } from './userSettings';
import trackRef from './trackRef';

function* login(token) {
  localStorage.setItem('jwtToken', token);
  setAuthorizationToken(token);
  yield put(authActions.setCurrentUser(jwtDecode(token), true));
  yield put(sagaActions.reloadApp());
  const settings = yield call(loadSettings);
  yield call(trackRef, true, settings);
}

function* logout() {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
  yield put(authActions.setCurrentUser({}));
  yield put(settingsActions.clear());
  yield put(sagaActions.reloadApp());
  yield put(push('/'));
}

function* authorize(params) {
  const { values, resolve, reject } = params;
  const email = values.get('email');
  const password = values.get('password');
  try {
    const response = yield call(Api.post, '/auth', { email, password });
    const token = response.data.token;
    yield call(login, token);
    yield call(resolve);
    yield put(push('/course'));
  } catch (error) {
    yield put(actions.loginError());
    const errorMessage = serverErrors[error.response.data.errors[0].message];
    yield call(reject, new SubmissionError({ _error: errorMessage }));
  } finally {
    if (yield cancelled()) {
      // ... put special cancellation handling code here
      // TODO: handle errors
    }
  }
}

export function* watchLogin() {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload: { values, resolve, reject } } = yield take(types.LOGIN_REQUEST);
    yield call(authorize, { values, resolve, reject });
  }
}

export function* watchLogout() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(types.LOGOUT);
    yield call(logout);
  }
}
