import { takeEvery, select, put, all, call, takeLatest, race, take }
  from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types as sagaTypes, actions as sagaActions } from '../actions';
import { actions as studyActions } from '../../redux/study';
import { actions as entitiesActions } from '../../redux/entities';
import { actions as fromUi } from '../../redux/ui';
import { playSound } from '../audio';
import selectors from '../../rootSelectors';
import { fetchEntities } from '../entities';
import { push } from 'react-router-redux';

export function* checkDialogData(id) {
  yield put(studyActions.setCurrentDialogId(id));
  const currentElement = yield select(selectors.getCurrentDialog);
  return (currentElement === undefined) ? false : true;
}

export function* fetchDialogData(episodeId) {
  return yield call(fetchEntities, ['/episode/' + episodeId + '/dialogs']);
  // TODO: handle fetch error
}

export function* playSentence(mode = 'explore') {
  if (mode === 'explore') {
    // Disable next button
    yield put(fromUi.set('nextButton', false));
  }
  // Animate and update avatar mood
  const statement = yield select(selectors.getCurrentStatement);
  const sentence = yield select(selectors.getCurrentSentenceWithValues);
  try {
    yield put(entitiesActions
      .update('avatars', String(statement.avatarId), 'mood', sentence.mood));
    yield put(entitiesActions
      .update('avatars', String(statement.avatarId), 'isTalking', true));
    // Mute sound in Role Play
    let muted = false;
    if (mode === 'roleplay') {
      muted = yield select(selectors.getIsChosenAvatarTalking);
    }
    // Find sound of currentSentence and play it
    const src = [sentence.audioUrl];
    const text = sentence.chinese;
    yield race({ // Allow stopping sound via "End" button
      task: call(playSound, src, muted, text),
      stopSentence: take(sagaTypes.STOP_SENTENCE),
      pause: take(sagaTypes.PAUSE)
    });
    if (mode === 'roleplay' && muted === true) {
      yield delay(1000); // Give more time to the user to read the sentence
    }
  } finally {
    // Once the sound ends OR is cancelled,
    // stop avatar animation and display next button
    yield put(entitiesActions
      .update('avatars', String(statement.avatarId), 'isTalking', false));
    if (mode === 'explore') {
      yield put(fromUi.set('nextButton', true));
    }
  }
}

function* nextSentence(mode = 'explore') {
  // Go to next Sentence
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  yield put(studyActions.setCurrentSentenceId(nextSentenceId));
  if (mode === 'explore') {
    yield put(sagaActions.playSentence());
  } else {
    yield call(playSentence, mode);
  }
}

// Only used in explore mode
function* switchSentence(action) {
  yield put(studyActions.setCurrentSentenceId(action.payload.id));
  yield put(sagaActions.playSentence());
}

function* nextStatement(mode = 'explore') {
  yield put(sagaActions.stopSentence());
  const nextStatementId = yield select(selectors.getNextStatementId);
  if (nextStatementId === undefined) {
    yield put(sagaActions.endDialog());
  } else {
    yield put(studyActions.setCurrentStatementId(nextStatementId));
    const statement = yield select(selectors.getCurrentStatement);
    yield put(studyActions.setCurrentSentenceId(statement.sentences[0]));
    if (mode === 'explore') {
      yield put(sagaActions.playSentence());
    } else {
      yield call(playSentence, mode);
    }
  }
}

// Only used in explore mode
function* previousStatement() {
  yield put(sagaActions.stopSentence());
  const previousStatementId = yield select(selectors.getPreviousStatementId);
  yield put(studyActions.setCurrentStatementId(previousStatementId));
  const statement = yield select(selectors.getCurrentStatement);
  yield put(studyActions.setCurrentSentenceId(statement.sentences[0]));
  yield put(sagaActions.playSentence());
}

export function* next(mode = 'explore') {
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  if (nextSentenceId !== undefined) {
    return yield call(nextSentence, mode);
  }
  return yield call(nextStatement, mode);
}

function* switchDialogMode(action) {
  yield put(push(action.payload.link));
}

// Export watchers

export default function* watchDialogSagas() {
  yield all([
    takeEvery(sagaTypes.NEXT_SENTENCE, nextSentence),
    // takeEvery(sagaTypes.PREVIOUS_SENTENCE, previousSentence),
    takeEvery(sagaTypes.SWITCH_SENTENCE, switchSentence),
    takeEvery(sagaTypes.NEXT_STATEMENT, nextStatement),
    takeEvery(sagaTypes.PREVIOUS_STATEMENT, previousStatement),
    takeLatest(sagaTypes.PLAY_SENTENCE, playSentence),
    takeEvery(sagaTypes.DIALOG_LINK_CLICK, switchDialogMode)
  ]);
}
