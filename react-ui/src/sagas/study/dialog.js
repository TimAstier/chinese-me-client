import { takeEvery, select, put, all, call, takeLatest, race, take }
  from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types as sagaTypes, actions as fromSaga } from '../actions';
import { actions as fromStudy } from '../../redux/study';
import { actions as fromEntities } from '../../redux/entities';
import { actions as fromUi } from '../../redux/ui';
import { playSound } from '../audio';
import selectors from '../../rootSelectors';
import { fetchEntities } from '../entities';
import { actions as studyActions } from '../../redux/study';

export function* checkDialogData(id) {
  yield put(studyActions.setCurrentDialogId(id));
  const currentElement = yield select(selectors.getCurrentDialog);
  return (currentElement === undefined) ? false : true;
}

export function* fetchDialogData(episodeId) {
  return yield call(fetchEntities, '/episode/' + episodeId + '/dialogs');
  // TODO: handle fetch error
}

export function* playSentence(mode = 'explore') {
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
    if (mode === 'roleplay') {
      muted = yield select(selectors.getIsChosenAvatarTalking);
    }
    // Find sound of currentSentence and play it
    const src = [sentence.audioUrl];
    yield race({ // Allow stopping sound via "End" button
      task: call(playSound, src, muted),
      cancel: take(sagaTypes.STOP_SENTENCE)
    });
    if (mode === 'roleplay' && muted === true) {
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

export function* next(mode = 'explore') {
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  if (nextSentenceId !== undefined) {
    return yield call(nextSentence, mode);
  }
  return yield call(nextStatement, mode);
}

// Export watchers

export default function* watchDialogSagas() {
  yield all([
    takeEvery(sagaTypes.NEXT_SENTENCE, nextSentence),
    takeEvery(sagaTypes.PREVIOUS_SENTENCE, previousSentence),
    takeLatest(sagaTypes.PLAY_SENTENCE, playSentence)
  ]);
}