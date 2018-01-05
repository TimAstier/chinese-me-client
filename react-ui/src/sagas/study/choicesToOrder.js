import { put, take, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types as sagaTypes } from '../actions';
import { actions as uiActions } from '../../redux/ui';
import { actions as sagaActions } from '../actions';
import selectors from '../../rootSelectors';
import { actions as choicesToOrderActions } from '../../redux/choicesToOrder';
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
  yield put(choicesToOrderActions.init());
}

export function* initUi() {}

export function* run(isExam = false) {
  const result = {};
  const exercise = yield select(selectors.getCurrentExercise);
  yield take(sagaTypes.CHECK_ANSWER);
  const userAnswer = yield select(selectors.getChoicesToOrderUserAnswer);
  result.value = userAnswer;
  const teacherComment = yield call(fetchTeacherComment, exercise.get('id'), userAnswer);
  const success = teacherComment.isCorrect;
  if (success) {
    result.isCorrect = true;
    yield put(sagaActions.playSuccessSound());
    yield put(choicesToOrderActions.setStatus('correct'));
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
  yield put(choicesToOrderActions.setStatus('wrong'));
  if (isExam) {
    return result;
  }
  yield put(uiActions.set('nextButton', true));
  yield take(sagaTypes.NEXT_QUESTION);
  return result;
}

// export function* nextScreen() {}

// export function* clean() {}
