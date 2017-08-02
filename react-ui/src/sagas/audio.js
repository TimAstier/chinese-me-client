import { take, put, cancelled, select, call, takeLatest }
  from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { actions as fromAudio } from '../redux/audio';
import selectors from '../rootSelectors';
import { types as sagaTypes } from './actions';
import sounds from '../constants/sounds';
import howler from 'howler';

// Sub-routines

export function *playSound(src, muted = false) {
  const sound = new howler.Howl({ src });
  sound.mute(muted);
  // Create an event channel
  const channel = eventChannel(emitter => {
    sound.on('end', () => {
      emitter(END); // Ends the channel
    });
    // Return an unsubscribe method
    return () => {
      // Perform any cleanup you need here
      sound.unload();
    };
  });

  sound.play();
  yield put(fromAudio.set('isPlaying', true));

  try {
    while (true) { // eslint-disable-line no-constant-condition
      yield take(channel); // The loop breaks via the END in the channel
    }
  } finally {
    // Audio is done playing OR playSound was cancelled
    if (yield cancelled()) {
      sound.unload();
    }
    yield put(fromAudio.set('isPlaying', false));
  }
}

function* playAudio() {
  const audioUrl = yield select(selectors.getAudioUrl);
  yield call(playSound, [audioUrl]);
}

export function* playSuccessSound() {
  yield call(playSound, [sounds.success]);
}

export function* playWrongSound() {
  yield call(playSound, [sounds.wrong]);
}

// Watchers

export default function* watchAudioSagas() {
  yield takeLatest(sagaTypes.PLAY_AUDIO, playAudio);
}
