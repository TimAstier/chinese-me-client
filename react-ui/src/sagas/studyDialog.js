import { takeEvery, select, put, all, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types } from '../redux/study';
import selectors from '../rootSelectors';
import { actions as fromStudy } from '../redux/study';
import { actions as fromEntities } from '../redux/entities';
import { actions as fromUi } from '../redux/ui';

// Sub-routines

// TODO: Refactor and DRY

function* playSentence() {
  // Animate and update avatar mood
  yield put(fromUi.set('nextButton', false));
  yield put(fromUi.set('isAudioPlaying', true));
  const statement = yield select(selectors.getCurrentStatement);
  const sentence = yield select(selectors.getCurrentSentence);
  yield put(fromEntities.update('avatars', String(statement.avatarId), 'mood', sentence.mood));
  yield put(fromEntities.update('avatars', String(statement.avatarId), 'isTalking', true));
  yield delay(1500); // Mock audio length
  yield put(fromEntities.update('avatars', String(statement.avatarId), 'isTalking', false));
  yield put(fromUi.set('nextButton', true));
  yield put(fromUi.set('isAudioPlaying', false));
}

function* nextSentence() {
  // Go to next Sentence
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  yield put(fromStudy.set('currentSentenceId', nextSentenceId));
  yield call(playSentence);
}

function* previousSentence() {
  // Go to previous Sentence
  const previousSentenceId = yield select(selectors.getPreviousSentenceId);
  yield put(fromStudy.set('currentSentenceId', previousSentenceId));
  yield call(playSentence);
}

function* nextStatement() {
  const nextStatementId = yield select(selectors.getNextStatementId);
  yield put(fromStudy.set('currentStatementId', nextStatementId));
  const statement = yield select(selectors.getCurrentStatement);
  yield put(fromStudy.set('currentSentenceId', statement.sentences[0]));
  yield call(playSentence);
}

function* switchStatement(action) {
  yield put(fromStudy.set('currentStatementId', action.payload.id));
  const statement = yield select(selectors.getCurrentStatement);
  yield put(fromStudy.set('currentSentenceId', statement.sentences[0]));
  yield call(playSentence);
}

function* next() {
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  if (nextSentenceId !== undefined) {
    return yield call(nextSentence);
  }
  return yield call(nextStatement);
}

// Watchers

function* watchNextSentence() {
  yield takeEvery(types.NEXT_SENTENCE, nextSentence);
}

function* watchPreviousSentence() {
  yield takeEvery(types.PREVIOUS_SENTENCE, previousSentence);
}

function* watchSwitchStatement() {
  yield takeEvery(types.SWITCH_STATEMENT, switchStatement);
}

function* watchNext() {
  yield takeEvery(types.NEXT, next);
}

// Export

export default function* studyDialog() {
  yield all([
    watchNextSentence(),
    watchPreviousSentence(),
    watchSwitchStatement(),
    watchNext()
  ]);
}
