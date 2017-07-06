import { takeEvery } from 'redux-saga/effects';
import { types } from '../redux/study';

export function* nextSentence(action) {
  yield console.log(action);
}

export default function* watchNextSentence() {
  yield takeEvery(types.NEXT_SENTENCE, nextSentence);
}
