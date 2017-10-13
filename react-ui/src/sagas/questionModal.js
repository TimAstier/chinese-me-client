import { takeEvery, call, put, all } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import Api from '../utils/api';
import { actions as uiActions } from '../redux/ui';

function* sendClosedQuestionAnswer(action) {
  // TODO: probably need to to e.target
  console.log('from saga', action.payload);
  yield put(uiActions.closeQuestionModal());
  // try {
  //   yield all([
  //     call(
  //       Api.post,
  //       '/feedbacks',
  //       // Data
  //     ),
  //   ]);
  // } catch (error) {
  //   // TODO: handle errors
  // }
}

export default function* watchQuestionModalSagas() {
  yield all([
    takeEvery(sagaTypes.CLOSED_QUESTION_ANSWERED, sendClosedQuestionAnswer)
  ]);
}
