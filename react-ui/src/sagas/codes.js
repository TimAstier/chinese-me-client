/* eslint-disable no-console */
import { take, call, all } from 'redux-saga/effects';
import { types } from './actions';
import Api from '../utils/api';
import { SubmissionError } from 'redux-form/immutable';
import { loadSettings } from './userSettings';

function* watchActivate() {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload: { values, resolve, reject } } = yield take(types.ACTIVATE_GIFT_CODE);
    try {
      const activated = yield call(Api.post, '/codes/activate/', values);
      if (activated.status === 200) {
        yield call(resolve);
      }
      yield call(loadSettings);
      // TODO: show an UI repsonse
    } catch (error) {
      yield call(reject, new SubmissionError(error.response.data));
    }
  }
}

export default function* watchCodesSagas() {
  yield all([
    watchActivate()
  ]);
}
