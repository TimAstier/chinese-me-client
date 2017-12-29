import { put, select, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import selectors from '../../rootSelectors';
import { actions as multipleChoiceActions } from '../../redux/multipleChoice';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { actions as uiActions } from '../../redux/ui';
import { actions as audioActions } from '../../redux/audio';

export function isDataLoaded() {
  return true;
}

export function* fetchData() {}

export function checkData() {
  return true;
}

export function* initStudyData() {
  yield put(multipleChoiceActions.init());
}

export function* initUi(type) {
  if (type === 'audioToChoice') {
    yield put(uiActions.set('playAudioButton', true));
  }
}

export function* run(isExam = false, type) {
  const result = {};
  const exercise = yield select(selectors.getCurrentExercise);
  if (type === 'audioToChoice') {
    yield put(audioActions.set('audioUrl', exercise.audioUrl));
    yield put(sagaActions.playAudio());
  }
  yield take(sagaTypes.CHECK_ANSWER);
  const userAnswer = yield select(selectors.multipleChoice.getUserAnswer);
  result.value = exercise.get('choices')[userAnswer];
  // Note: the correct result is always the first one in the choices array
  // Choices are randomized in the render method of the MultipleChoice component
  const expectedAnswer = 0;
  const success = expectedAnswer === userAnswer;
  if (success) {
    result.isCorrect = true;
    yield put(uiActions.set('playAudioButton', false));
    yield put(sagaActions.playSuccessSound());
    yield put(multipleChoiceActions.setStatus('correct'));
    if (isExam) {
      return result;
    }
    yield delay(1000);
    return result;
  }
  result.isCorrect = false;
  yield put(sagaActions.playWrongSound());
  yield put(multipleChoiceActions.setStatus('wrong'));
  if (isExam) {
    return result;
  }
  yield put(uiActions.set('nextButton', true));
  yield take(sagaTypes.NEXT_QUESTION);
  return result;
}

// export function* nextScreen() {}

// export function* clean() {}
