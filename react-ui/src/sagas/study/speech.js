import { put, select, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import selectors from '../../rootSelectors';
import { actions as exerciseActions } from '../../redux/exercise';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { actions as uiActions } from '../../redux/ui';
import { actions as audioActions, types as audioTypes } from '../../redux/audio';
import makeAudioUrl from '../../helpers/makeAudioUrl';

export function isDataLoaded() {
  return true;
}

export function* fetchData() {}

export function checkData() {
  return true;
}

export function* initStudyData() {
  yield put(exerciseActions.init());
}

export function* initUi() {}

export function* run(isExam = false, type) {
  // There is currently no way to fail this exercise
  // Aditionnaly, there shoud be no 'toSpeech' exercise in Exam
  const result = { isCorrect: true };
  const exercise = yield select(selectors.getCurrentExercise);
  yield put(audioActions.set('audioUrl', makeAudioUrl(exercise.audioUrl)));
  if (type === 'audioToSpeech') {
    yield delay(0.5);
    yield put(sagaActions.playAudio());
  }
  // Wait until click on playaudio and one audio finishes to play
  while (true) {
    yield take(sagaTypes.PLAY_AUDIO);
    const action = yield take(audioTypes.SET);
    if (action.payload.attribute === 'isPlaying' &&
      action.payload.value === false) {
      break;
    }
  }
  yield put(exerciseActions.setStatus('repeat'));
  yield put(uiActions.set('nextButton', true));
  yield take(sagaTypes.NEXT_QUESTION);
  return result;
}

// export function* nextScreen() {}

// export function* clean() {}
