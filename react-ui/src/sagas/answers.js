import { take, call } from 'redux-saga/effects';
import Api from '../utils/api';
import { types as sagaTypes } from './actions';

export function* watchSaveAnswer() {
  while (true) { // eslint-disable-line no-constant-condition
    const action = yield take(sagaTypes.SAVE_ANSWER);
    try {
      yield call(Api.post, '/answers', action.payload.answer);
    } catch (error) {
      // TODO: handle error
    }
  }
}
