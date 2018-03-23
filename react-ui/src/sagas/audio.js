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

export function *voiceText(text, muted = false, rate = 0.7) {
  // BUG: ResponsiveVoice Chinese voice currently doesn't work on Safari, IOS
  // An alternative could be: http://www.voicerss.org/api/demo.aspx
  // See ResponsiveVoice Api: https://responsivevoice.org/api/
  yield put(audioActions.startLoading());
  const voicer = window.responsiveVoice;
  if (voicer.voiceSupport()) {
    const channel = eventChannel(emitter => {
      voicer.speak(
        text.replace(/_/g, ''), // Remove '_' that appear when a user variable is missing
        'Chinese Female',
        {
          volume: muted ? 0 : 1,
          rate,
          onstart: () => emitter({ loaded: true }),
          onend: () => emitter(END)
        }
      );
      // Unsubscribe method
      return () => {
        voicer.cancel();
      };
    });

    try {
      while (true) { // eslint-disable-line no-constant-condition
        const status = yield take(channel); // The loop breaks via the END in the channel
        if (status.loaded === true) {
          yield put(audioActions.loadingSuccess());
          yield put(audioActions.set('isPlaying', true));
        }
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
    // NOTE: playing sounds with HTML has a drawback. On mobile, sounds requires a
    // user action in order to be played, which breaks the dialog features.
    volume
  });
  sound.mute(muted);

  const channel = eventChannel(emitter => {
    sound.on('load', () => {
      emitter({ loaded: true });
    });
    sound.on('end', () => {
      emitter(END); // Ends the channel
    });
    // Return an unsubscribe method
    return () => {
      // Perform any cleanup you need here
      sound.unload();
    };
  });

  yield put(audioActions.startLoading());
  sound.play();

  try {
    while (true) { // eslint-disable-line no-constant-condition
      const status = yield take(channel); // The loop breaks via the END in the channel
      if (status.loaded === true) {
        yield put(audioActions.loadingSuccess());
        yield put(audioActions.set('isPlaying', true));
      }
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
  // Deciding on the speed
  let slow = action.payload.slow;
  const lastOrigin = yield select(selectors.audio.getLastOrigin);
  if (action.payload.origin) {
    if (lastOrigin === '' || lastOrigin === action.payload.origin) {
      if (action.payload.toggleSlow) {
        yield put(audioActions.toggleSlow());
        yield put(audioActions.set('lastOrigin', action.payload.origin));
      }
    } else {
      slow = false;
      yield put(audioActions.set('slow', true));
      yield put(audioActions.set('lastOrigin', action.payload.origin));
    }
  }
  // Priorities to define which sound to play:
  // 1. payload.url 2. payload.text 3. getAudioUrl
  if (action.payload.url) {
    return yield call(playSound, [slow ? action.payload.slowUrl : action.payload.url]);
  }
  if (action.payload.text) {
    const rate = slow ? 0.4 : 0.7;
    return yield call(voiceText, action.payload.text, false, rate);
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
