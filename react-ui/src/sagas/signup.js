import { take, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import { types } from './actions';
import Api from '../utils/api';

export function* watchCreateUser() {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload: { values, resolve, reject } } = yield take(types.CREATE_NEW_USER);
    try {
      const response = yield call(Api.post, '/users', values);
      console.log('New user created: ' + response.data.user.data.attributes.email);
      resolve();
      // TODO: send confirmation email
      yield delay(3000); // mock email TODO: remove;
      yield put(push('/email_sent'));
      //
    } catch (error) {
      reject();
      console.log('User creation failed');
    }
  }
}
