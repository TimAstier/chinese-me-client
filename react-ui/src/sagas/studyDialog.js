import { takeEvery, select, put, all, call } from 'redux-saga/effects';
import { types } from '../redux/study';
import selectors from '../rootSelectors';
import { actions as fromStudy } from '../redux/study';
import { actions as fromEntities } from '../redux/entities';
import { actions as fromUi } from '../redux/ui';
import { playSound } from './audio';

// TODO: Handle Stop audio action when audio is playing

// Sub-routines

function* playSentence() {
  // Disable next button
  yield put(fromUi.set('nextButton', false));

  // Animate and update avatar mood
  const statement = yield select(selectors.getCurrentStatement);
  const sentence = yield select(selectors.getCurrentSentence);
  yield put(fromEntities.update('avatars', String(statement.avatarId), 'mood', sentence.mood));
  yield put(fromEntities.update('avatars', String(statement.avatarId), 'isTalking', true));

  // Find sound of currentSentence and play it
  const src = [sentence.audioUrl];
  yield call(playSound, src);

  // Once the sound ends, stop avatar animation and display next button
  yield put(fromEntities.update('avatars', String(statement.avatarId), 'isTalking', false));
  yield put(fromUi.set('nextButton', true));
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

// Export watchers

export default function* studyDialog() {
  yield all([
    takeEvery(types.NEXT_SENTENCE, nextSentence),
    takeEvery(types.PREVIOUS_SENTENCE, previousSentence),
    takeEvery(types.SWITCH_STATEMENT, switchStatement),
    takeEvery(types.NEXT, next),
    takeEvery(types.PLAY_SENTENCE, playSentence)
  ]);
}
