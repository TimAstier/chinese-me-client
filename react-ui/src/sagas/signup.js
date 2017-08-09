/* eslint-disable no-console */
import { take, call, put, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { types } from './actions';
import Api from '../utils/api';

function* watchCreateUser() {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload: { values, resolve, reject } } = yield take(types.CREATE_NEW_USER);
    try {
      const response = yield call(Api.post, '/users', values);
      console.log('New user created: ' + response.data.user.data.attributes.email);
      resolve();
      yield put(push('/email_sent'));
      //
    } catch (error) {
      reject();
      console.log('User creation failed');
    }
  }
}

function* watchActivate() {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload } = yield take(types.ACTIVATE);
    try {
      yield call(Api.get, '/users/activate/' + payload);
      console.log('Account activated');
      yield put(push('/signup/activated'));
      //
    } catch (error) {
      // TODO: redirect to error page
      console.log('Account activation failed');
    }
  }
}

export default function* watchSignupSagas() {
  yield all([
    watchCreateUser(),
    watchActivate()
  ]);
}
