import { take, put, cancelled, select, call, takeLatest, all }
  from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { actions as audioActions } from '../redux/audio';
import selectors from '../rootSelectors';
import { types as sagaTypes } from './actions';
import sounds from '../constants/sounds';
import howler from 'howler';

// Sub-routines

/*
** eventChannel is a factory function (not an Effect) that creates a Channel
** for events from event sources.
** See more info in docs:
** https://github.com/redux-saga/redux-saga/blob/master/docs/advanced/Channels.md#using-the-eventchannel-factory-to-connect-to-external-events
*/

export function *voiceText(text, muted = false) {
  // See ResponsiveVoice Api: https://responsivevoice.org/api/
  const voicer = window.responsiveVoice;
  if (voicer.voiceSupport()) {
    const channel = eventChannel(emitter => {
      voicer.speak(
        text.replace(/_/g, ''), // Remove '_' that appear when a user variable is missing
        'Chinese Female',
        {
          volume: muted ? 0 : 1,
          rate: 0.5,
          onend: () => emitter(END)
        }
      );
      // Unsubscribe method
      return () => {
        voicer.cancel();
      };
    });

    yield put(audioActions.set('isPlaying', true));

    try {
      while (true) { // eslint-disable-line no-constant-condition
        yield take(channel); // The loop breaks via the END in the channel
      }
    } finally {
      // Audio is done playing OR playSound was cancelled
      if (yield cancelled()) {
        voicer.cancel();
      }
      yield put(audioActions.set('isPlaying', false));
    }
  }
}

export function *playSound(src, muted = false, volume = 1) {
  const sound = new howler.Howl({
    src,
    html5: true, // Fix CORS errors. See https://github.com/goldfire/howler.js/issues/64
    volume
  });
  sound.mute(muted);

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
  yield put(audioActions.set('isPlaying', true));

  try {
    while (true) { // eslint-disable-line no-constant-condition
      yield take(channel); // The loop breaks via the END in the channel
    }
  } finally {
    // Audio is done playing OR playSound was cancelled
    if (yield cancelled()) {
      sound.unload();
    }
    yield put(audioActions.set('isPlaying', false));
  }
}

function* playAudio(action) {
  // Priorities to define which sound to play:
  // 1. payload.url 2. payload.text 3. getAudioUrl
  if (action.payload.url) {
    return yield call(playSound, [action.payload.url]);
  }
  if (action.payload.text) {
    return yield call(voiceText, action.payload.text);
  }
  return yield call(playSound, [
    yield select(selectors.audio.getAudioUrl)
  ]);
}

export function* playSuccessSound() {
  yield call(playSound, sounds.success, false, 0.5);
}

export function* playWrongSound() {
  yield call(playSound, sounds.wrong, false, 0.5);
}

export function* playLevelWinSound() {
  yield call(playSound, sounds.levelWin, false, 0.1);
}

export function* playLevelFailSound() {
  yield call(playSound, sounds.levelFail, false, 0.1);
}

// Watchers

export default function* watchAudioSagas() {
  yield all([
    takeLatest(sagaTypes.PLAY_AUDIO, playAudio),
    takeLatest(sagaTypes.PLAY_SUCCESS_SOUND, playSuccessSound),
    takeLatest(sagaTypes.PLAY_WRONG_SOUND, playWrongSound),
    takeLatest(sagaTypes.PLAY_LEVEL_WIN_SOUND, playLevelWinSound),
    takeLatest(sagaTypes.PLAY_LEVEL_FAIL_SOUND, playLevelFailSound)
  ]);
}
