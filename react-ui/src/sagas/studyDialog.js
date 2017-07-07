import { takeEvery, select, put, all, call } from 'redux-saga/effects';
import { types } from '../redux/study';
import selectors from '../rootSelectors';
import { actions as fromStudy } from '../redux/study';
import { actions as fromAudio } from '../redux/audio';

// Sub-routines

function* nextSentence() {
  // Go to next Sentence
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  yield put(fromStudy.set('currentSentenceId', nextSentenceId));
  yield put(fromAudio.playSentence());
}

function* previousSentence() {
  // Go to previous Sentence
  const previousSentenceId = yield select(selectors.getPreviousSentenceId);
  yield put(fromStudy.set('currentSentenceId', previousSentenceId));
  yield put(fromAudio.playSentence());
}

function* nextStatement() {
  const nextStatementId = yield select(selectors.getNextStatementId);
  yield put(fromStudy.set('currentStatementId', nextStatementId));
  const statement = yield select(selectors.getCurrentStatement);
  yield put(fromStudy.set('currentSentenceId', statement.sentences[0]));
  yield put(fromAudio.playSentence());
}

function* switchStatement(action) {
  yield put(fromStudy.set('currentStatementId', action.payload.id));
  const statement = yield select(selectors.getCurrentStatement);
  yield put(fromStudy.set('currentSentenceId', statement.sentences[0]));
  yield put(fromAudio.playSentence());
}

function* next() {
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  if (nextSentenceId !== undefined) {
    return yield call(nextSentence);
  }
  return yield call(nextStatement);
}

// Export watchers

export default function* studyDialog() {
  yield all([
    takeEvery(types.NEXT_SENTENCE, nextSentence),
    takeEvery(types.PREVIOUS_SENTENCE, previousSentence),
    takeEvery(types.SWITCH_STATEMENT, switchStatement),
    takeEvery(types.NEXT, next)
  ]);
}
