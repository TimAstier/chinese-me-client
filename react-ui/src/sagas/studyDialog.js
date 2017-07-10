import { takeEvery, select, put, all, call, takeLatest, race, take }
  from 'redux-saga/effects';
import { types as studyTypes } from '../redux/study';
import { types as sagaTypes, actions as fromSaga } from './actions';
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

  try {
    yield put(fromEntities
      .update('avatars', String(statement.avatarId), 'mood', sentence.mood));
    yield put(fromEntities
      .update('avatars', String(statement.avatarId), 'isTalking', true));

    // Find sound of currentSentence and play it
    const src = [sentence.audioUrl];
    yield race({ // Allow stopping sound via "End" button
      task: call(playSound, src),
      cancel: take(sagaTypes.STOP_SENTENCE)
    });
  } finally {
    // Once the sound ends OR is cancelled,
    // stop avatar animation and display next button
    yield put(fromEntities
      .update('avatars', String(statement.avatarId), 'isTalking', false));
    yield put(fromUi.set('nextButton', true));
  }
}

function* nextSentence() {
  // Go to next Sentence
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  yield put(fromStudy.setCurrentSentenceId(nextSentenceId));
  yield put(fromSaga.playSentence());
}

function* previousSentence() {
  // Go to previous Sentence
  const previousSentenceId = yield select(selectors.getPreviousSentenceId);
  yield put(fromStudy.setCurrentSentenceId(previousSentenceId));
  yield put(fromSaga.playSentence());
}

function* nextStatement() {
  const nextStatementId = yield select(selectors.getNextStatementId);
  if (nextStatementId === undefined) {
    yield put(fromSaga.endDialog());
  } else {
    yield put(fromStudy.setCurrentStatementId(nextStatementId));
    const statement = yield select(selectors.getCurrentStatement);
    yield put(fromStudy.setCurrentSentenceId(statement.sentences[0]));
    yield put(fromSaga.playSentence());
  }
}

function* switchStatement() {
  const statement = yield select(selectors.getCurrentStatement);
  yield put(fromStudy.setCurrentSentenceId(statement.sentences[0]));
  yield put(fromSaga.playSentence());
}

function* next() {
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  if (nextSentenceId !== undefined) {
    return yield call(nextSentence);
  }
  return yield call(nextStatement);
}

// Export watchers

export default function* watchStudyDialogSagas() {
  yield all([
    takeEvery(sagaTypes.NEXT_SENTENCE, nextSentence),
    takeEvery(sagaTypes.PREVIOUS_SENTENCE, previousSentence),
    takeEvery(studyTypes.SWITCH_STATEMENT, switchStatement),
    takeEvery(sagaTypes.NEXT, next),
    takeLatest(sagaTypes.PLAY_SENTENCE, playSentence)
  ]);
}
