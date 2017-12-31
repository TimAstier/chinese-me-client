import { put, select, take, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import selectors from '../../rootSelectors';
import { actions as freeInputActions } from '../../redux/freeInput';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { actions as uiActions } from '../../redux/ui';
import { actions as audioActions } from '../../redux/audio';
import { fetch as fetchTeacherComment } from '../teacherComment';
import { actions as practiceActions } from '../../redux/practice';

export function isDataLoaded() {
  return true;
}

export function* fetchData() {}

export function checkData() {
  return true;
}

export function* initStudyData() {
  yield put(freeInputActions.init());
}

export function* initUi(type) {
  if (type === 'audioToText') {
    yield put(uiActions.set('playAudioButton', true));
  }
}

export function* run(isExam = false, type) {
  const result = {};
  const exercise = yield select(selectors.getCurrentExercise);
  if (type === 'audioToText') {
    yield put(audioActions.set('audioUrl', exercise.audioUrl));
    yield put(sagaActions.playAudio());
  }
  yield take(sagaTypes.CHECK_ANSWER);
  const userAnswer = yield select(selectors.freeInput.getUserAnswer);
  result.value = userAnswer;
  // Compare to correct answers in DB
  const teacherComment = yield call(fetchTeacherComment, exercise.get('id'), userAnswer);
  const success = teacherComment.isCorrect;
  if (success) {
    result.isCorrect = true;
    yield put(uiActions.set('playAudioButton', false));
    yield put(sagaActions.playSuccessSound());
    yield put(freeInputActions.setStatus('correct'));
    if (isExam) {
      return result;
    }
    yield delay(1000);
    return result;
  }
  result.isCorrect = false;
  yield put(sagaActions.playWrongSound());
  yield put(practiceActions.setCorrectAnswer(teacherComment.correctAnswer));
  yield put(practiceActions.setExplanation(teacherComment.explanation));
  // use teacherComment.correctAnswer and teacherComment.explanation
  yield put(freeInputActions.setStatus('wrong'));
  if (isExam) {
    return result;
  }
  yield put(uiActions.set('nextButton', true));
  yield take(sagaTypes.NEXT_QUESTION);
  return result;
}

// export function* nextScreen() {}

// export function* clean() {}
