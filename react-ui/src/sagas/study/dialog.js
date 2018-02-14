import { takeEvery, select, put, all, call, takeLatest, race, take }
  from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types as sagaTypes, actions as sagaActions } from '../actions';
import { actions as studyActions } from '../../redux/study';
import { actions as entitiesActions } from '../../redux/entities';
// import { actions as fromUi } from '../../redux/ui';
import { playSound, voiceText } from '../audio';
import selectors from '../../rootSelectors';
import { fetchEntities } from '../entities';
import { push } from 'react-router-redux';

const ADDITIONAL_DELAY_IN_ROLEPLAY = 1000;

export function* checkDialogData(id) {
  yield put(studyActions.setCurrentDialogId(id));
  const currentElement = yield select(selectors.getCurrentDialog);
  return (currentElement === undefined) ? false : true;
}

export function* fetchDialogData(episodeId) {
  return yield call(fetchEntities, ['/episode/' + episodeId + '/dialogs']);
  // TODO: handle fetch error
}

export function* playSentence() {
  // Animate and update avatar mood
  const mode = yield select(selectors.study.getDialogMode);
  const statement = yield select(selectors.getCurrentStatement);
  const sentence = yield select(selectors.getCurrentSentenceWithValues);
  const audioUrl = (mode === 'explore') ? sentence.slowAudioUrl : sentence.audioUrl;
  const rate = (mode === 'explore') ? 0.4 : 0.7;
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
    // Play current sentence
    yield race({ // Allow stopping sound via "End" button
      task: audioUrl ?
        call(playSound, [ audioUrl ], muted)
        : call(voiceText, sentence.chinese, muted, rate),
      stopSentence: take(sagaTypes.STOP_SENTENCE),
      pause: take(sagaTypes.PAUSE)
    });
    if (mode === 'roleplay' && muted === true) {
      // Give more time to the user to read the sentence
      yield delay(ADDITIONAL_DELAY_IN_ROLEPLAY);
    }
  } finally {
    // Once the sound ends OR is cancelled,
    // stop avatar animation
    yield put(entitiesActions
      .update('avatars', String(statement.avatarId), 'isTalking', false));
  }
}

function* nextSentence() {
  // Go to next Sentence
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  yield put(studyActions.setCurrentSentenceId(nextSentenceId));
  yield call(playSentence);
}

// Only used in explore mode
function* switchSentence(action) {
  yield put(studyActions.setCurrentSentenceId(action.payload.id));
  yield call(playSentence);
}

function* nextStatement() {
  yield put(sagaActions.stopSentence());
  const nextStatementId = yield select(selectors.getNextStatementId);
  if (nextStatementId === undefined) {
    yield put(sagaActions.endDialog());
  } else {
    yield put(studyActions.setCurrentStatementId(nextStatementId));
    const statement = yield select(selectors.getCurrentStatement);
    yield put(studyActions.setCurrentSentenceId(statement.sentences[0]));
    yield call(playSentence);
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

export function* next() {
  const nextSentenceId = yield select(selectors.getNextSentenceId);
  if (nextSentenceId !== undefined) {
    return yield call(nextSentence);
  }
  return yield call(nextStatement);
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
