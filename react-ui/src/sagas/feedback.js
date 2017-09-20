import { takeEvery, call, put, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types as sagaTypes } from './actions';
import Api from '../utils/api';
import { actions as uiActions } from '../redux/ui';

function* sendFeedback(action) {
  yield put(uiActions.updateFeedbackStatus('sending'));
  const { values, resolve, reject } = action.payload;
  const subject = values.get('subject');
  const message = values.get('message');
  try {
    yield all([
      call(
        Api.post,
        '/feedbacks',
        { subject, message }
      ),
      yield delay(1000)
    ]);
    yield call(resolve);
    yield put(uiActions.updateFeedbackStatus('sent'));
  } catch (error) {
    yield call(reject);
    yield put({type: 'SEND_FEEDBACK_ERROR', error});
    // TODO: handle errors
  }
}

export default function* watchSendFeedback() {
  yield takeEvery(sagaTypes.SEND_FEEDBACK, sendFeedback);
}
