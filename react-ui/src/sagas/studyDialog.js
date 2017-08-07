import { takeEvery, select, put, all, call, takeLatest, race, take }
  from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types as studyTypes } from '../redux/study';
import { types as sagaTypes, actions as fromSaga } from './actions';
import selectors from '../rootSelectors';
import { actions as fromStudy } from '../redux/study';
import { actions as fromEntities } from '../redux/entities';
import { actions as fromUi } from '../redux/ui';
import { playSound } from './audio';
import { push } from 'react-router-redux';
import { fetchEntities } from './entities';

// Sub-routines

function* initDialog() {
  const currentEpisode = yield select(selectors.getCurrentEpisode);
  yield put(fromStudy.setCurrentDialogId(currentEpisode.dialogs[0]));
  const currentDialog = yield select(selectors.getCurrentDialog);
  yield put(fromStudy.setCurrentStatementId(currentDialog.statements[0]));
  const currentStatement = yield select(selectors.getCurrentStatement);
  yield put(fromStudy.setCurrentSentenceId(currentStatement.sentences[0]));
  yield put(fromUi.set('skipButton', true));
}

export function* playDialogs(episodeId) {
  // Display Title
  yield put(fromUi.set('skipButton', false));
  yield put(fromUi.set('nextButton', false));
  yield put(fromUi.set('playAudioButton', false));
  yield put(fromStudy.setTitle('Dialog'));
  yield put(fromStudy.setPartNumber(3));
  yield put(push('/title'));
  // Fetch dialogs data
  yield all([
    call(fetchEntities, '/episode/' + episodeId + '/dialogs'),
    delay(3000) // Data is loaded during title screen
  ]);
  // TODO: handle fetch error
  yield call(playDialog); // TODO: for i = 0 to dialogs.length
}

function* playDialog() {
  yield call(initDialog);
  // Push route on router to mount studyDialog container
  yield put(push('/study/dialog'));
  // Listen mode
  yield race({
    listen: call(listenDialog, 'listen'),
    skip: take(sagaTypes.SKIP)
  });
  yield call(initDialog); // Restart from the beginning
  // Explore mode
  yield put(fromStudy.setDialogMode('explore'));
  yield put(fromUi.set('nextButton', true));
  yield put(fromSaga.playSentence());
  yield race({
    next: take(sagaTypes.NEXT),
    skip: take(sagaTypes.SKIP)
  });
  yield put(fromUi.set('nextButton', false));
  yield call(initDialog); // Restart from the beginning
  // RolePlay mode
  yield put(fromStudy.setChosenAvatarId(4)); // TODO: select avatar
  yield race({
    rolePlay: call(listenDialog, 'rolePlay'),
    skip: take(sagaTypes.SKIP)
  });
}

export function* listenDialog(mode) {
  yield put(fromStudy.setDialogMode(mode));
  yield call(playSentence, mode);
  const sentencesCount =
    yield select(selectors.getSentencesCountInCurrentDialog);
  for (let i = 0; i < sentencesCount - 1; i++) {
    yield delay(500); // Create spaces between audios
    yield call(next, mode);
  }
  yield put(fromUi.set('nextButton', true));
  yield take(sagaTypes.NEXT);
}

function* playSentence(mode = 'explore') {
  if (mode === 'explore') {
    // Disable next button
    yield put(fromUi.set('nextButton', false));
  }
  // Animate and update avatar mood
  const statement = yield select(selectors.getCurrentStatement);
  const sentence = yield select(selectors.getCurrentSentence);
  try {
    yield put(fromEntities
      .update('avatars', String(statement.avatarId), 'mood', sentence.mood));
    yield put(fromEntities
      .update('avatars', String(statement.avatarId), 'isTalking', true));
    // Mute sound in Role Play
    let muted = false;
    if (mode === 'rolePlay') {
      muted = yield select(selectors.getIsChosenAvatarTalking);
    }
    // Find sound of currentSentence and play it
    const src = [sentence.audioUrl];
    yield race({ // Allow stopping sound via "End" button
      task: call(playSound, src, muted),
      cancel: take(sagaTypes.STOP_SENTENCE)
    });
    if (mode === 'rolePlay' && muted === true) {
      yield delay(1000); // Give more time to the user to read the sentence
    }
  } finally {
    // Once the sound ends OR is cancelled,
    // stop avatar animation and display next button
    yield put(fromEntities
      .update('avatars', String(statement.avatarId), 'isTalking', false));
    if (mode === 'explore') {
      yield put(fromUi.set('nextButton', true));
    }
  }
}

function* nextSentence(mode = 'explore') {
  // Go to next Sentence
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  yield put(fromStudy.setCurrentSentenceId(nextSentenceId));
  if (mode === 'explore') {
    yield put(fromSaga.playSentence());
  } else {
    yield call(playSentence, mode);
  }
}

function* previousSentence() {
  // Go to previous Sentence
  const previousSentenceId = yield select(selectors.getPreviousSentenceId);
  yield put(fromStudy.setCurrentSentenceId(previousSentenceId));
  yield put(fromSaga.playSentence());
}

function* nextStatement(mode = 'explore') {
  const nextStatementId = yield select(selectors.getNextStatementId);
  if (nextStatementId === undefined) {
    yield put(fromSaga.endDialog());
  } else {
    yield put(fromStudy.setCurrentStatementId(nextStatementId));
    const statement = yield select(selectors.getCurrentStatement);
    yield put(fromStudy.setCurrentSentenceId(statement.sentences[0]));
    if (mode === 'explore') {
      yield put(fromSaga.playSentence());
    } else {
      yield call(playSentence, mode);
    }
  }
}

function* switchStatement() {
  const statement = yield select(selectors.getCurrentStatement);
  yield put(fromStudy.setCurrentSentenceId(statement.sentences[0]));
  yield put(fromSaga.playSentence());
}

function* next(mode = 'explore') {
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  if (nextSentenceId !== undefined) {
    return yield call(nextSentence, mode);
  }
  return yield call(nextStatement, mode);
}

// Export watchers

export default function* watchStudyDialogSagas() {
  yield all([
    takeEvery(sagaTypes.NEXT_SENTENCE, nextSentence),
    takeEvery(sagaTypes.PREVIOUS_SENTENCE, previousSentence),
    takeEvery(studyTypes.SWITCH_STATEMENT, switchStatement),
    takeLatest(sagaTypes.PLAY_SENTENCE, playSentence)
  ]);
}
