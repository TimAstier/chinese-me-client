import { takeEvery, select, put, all } from 'redux-saga/effects';
import { types } from '../redux/study';
import selectors from '../rootSelectors';
import { actions } from '../redux/study';

// Sub-routines

export function* nextSentence() {
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  yield put(actions.set('currentSentenceId', nextSentenceId));
}

export function* previousSentence() {
  const previousSentenceId = yield select(selectors.getPreviousSentenceId);
  yield put(actions.set('currentSentenceId', previousSentenceId));
}

// Watchers

export function* watchNextSentence() {
  yield takeEvery(types.NEXT_SENTENCE, nextSentence);
}

export function* watchPreviousSentence() {
  yield takeEvery(types.PREVIOUS_SENTENCE, previousSentence);
}

// Export

export default function* studyDialog() {
  yield all([
    watchNextSentence(),
    watchPreviousSentence()
  ]);
}
