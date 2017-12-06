import { take, call } from 'redux-saga/effects';
import Api from '../utils/api';
import { types as sagaTypes, actions as sagaActions } from './actions';

export function* watchSaveAnswer() {
  while (true) { // eslint-disable-line no-constant-condition
    const action = yield take(sagaTypes.SAVE_ANSWER);
    try {
      const response = yield call(Api.post, '/answers', action.payload.answer);
      console.log(response);
    } catch (error) {
      // TODO: handle error
      // yield call(reject, new SubmissionError(error.response.data));
      // console.log('User creation failed');
    }
  }
}
