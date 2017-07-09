import { take, put } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { actions as fromAudio } from '../redux/audio';
import howler from 'howler';

// Sub-routines

export function *playSound(src) {
  const sound = new howler.Howl({ src });

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
  // TODO: move this into onPlay
  yield put(fromAudio.set('isPlaying', true));

  try {
    while (true) { // eslint-disable-line no-constant-condition
      yield take(channel); // The loop breaks via the END in the channel
    }
  } finally {
    // Audio is done playing
    yield put(fromAudio.set('isPlaying', false));
  }
}
