import { takeEvery, all, select, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types } from '../redux/audio';
import selectors from '../rootSelectors';
import { actions as fromEntities } from '../redux/entities';
import { actions as fromUi } from '../redux/ui';
import { actions as fromAudio } from '../redux/audio';
import howler from 'howler';

// Sub-routines

function *playSentence() {
  // Animate and update avatar mood
  yield put(fromUi.set('nextButton', false));
  yield put(fromAudio.set('isPlaying', true));
  const statement = yield select(selectors.getCurrentStatement);
  const sentence = yield select(selectors.getCurrentSentence);
  const src = [sentence.audioUrl];
  const sound = new howler.Howl({ src });
  sound.play();
  yield put(fromEntities.update('avatars', String(statement.avatarId), 'mood', sentence.mood));
  yield put(fromEntities.update('avatars', String(statement.avatarId), 'isTalking', true));
  yield delay(1500); // Mock audio length
  yield put(fromEntities.update('avatars', String(statement.avatarId), 'isTalking', false));
  yield put(fromUi.set('nextButton', true));
  yield put(fromAudio.set('isPlaying', false));
}

// Watchers

function* watchPlay() {
  yield takeEvery(types.PLAY_SENTENCE, playSentence);
}

// Export

export default function* audio() {
  yield all([
    watchPlay()
  ]);
}
