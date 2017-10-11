/* eslint-disable no-console */
import { take, call, put, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { types } from './actions';
import Api from '../utils/api';
import { SubmissionError } from 'redux-form/immutable';
import { actions as sagaActions } from './actions';

function* watchCreateUser() {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload: { values, resolve, reject } } = yield take(types.CREATE_NEW_USER);
    try {
      const response = yield call(Api.post, '/users', values);
      yield put(sagaActions.newUserCreated(response.data.user.data.attributes));
      yield call(resolve);
      yield put(push('/signup/email_sent'));
    } catch (error) {
      yield call(reject, new SubmissionError(error.response.data));
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
