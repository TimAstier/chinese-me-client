import { put, select, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as multipleChoiceActions } from '../../redux/multipleChoice';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { actions as uiActions } from '../../redux/ui';
import { actions as practiceActions } from '../../redux/practice';

export function* isDataLoaded(id) {
  yield put(studyActions.setCurrentMultipleChoiceId(id));
  const initialized = yield select(selectors.practice.getInitialized);
  if (!initialized) {
    return false;
  }
  const currentElement = yield select(selectors.getCurrentMultipleChoice);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData() {}

export function checkData() {
  return true;
}

export function* initStudyData() {
  yield put(multipleChoiceActions.init());
}

export function* initUi() {}

export function* run(mode = 'free') {
  const multipleChoice = yield select(selectors.getCurrentMultipleChoice);
  yield take(sagaTypes.CHECK_ANSWER);
  const userAnswer = yield select(selectors.multipleChoice.getUserAnswer);
  // Note: the correct answer is always the first one in the choices array
  // Choices are randomized in the render method of the MultipleChoice component
  const expectedAnswer = 0;
  const success = expectedAnswer === userAnswer;
  // Tracking
  yield put(sagaActions.exerciseCompleted({
    id: multipleChoice.get('id'),
    type: 'multipleChoice',
    mode,
    success,
    userAnswer: multipleChoice.get('choices')[userAnswer],
    expectedAnswer: multipleChoice.get('choices')[expectedAnswer]
  }));
  // End Tracking
  if (success) {
    yield put(sagaActions.playSuccessSound());
    yield put(multipleChoiceActions.setStatus('correct'));
    if (mode === 'exam') {
      return true;
    }
    yield delay(1000);
    yield put(practiceActions.setInitialized(false));
    return yield put(practiceActions.correctAnswer());
  }
  yield put(sagaActions.playWrongSound());
  yield put(multipleChoiceActions.setStatus('wrong'));
  if (mode === 'exam') {
    return false;
  }
  yield put(uiActions.set('nextButton', true));
  yield take(sagaTypes.NEXT_QUESTION);
  yield put(practiceActions.setInitialized(false));
  return yield put(practiceActions.wrongAnswer());
}

// export function* nextScreen() {}

// export function* clean() {}
