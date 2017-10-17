// HOW TO add a new exercise type:
// 1. Retrieve data and exercise element from server (update service, serializer)
// 2. Update Exam container to render appropriate container (mapTypeToContainer)
// 3. Be sure the exerciseType is supported
//   - in mapExerciseTypeToSetCurrentAction helper
//   - in mapScreenTypeToModule helper
// 4. Update exercise saga to
//   - return success bool
//   - avoid non-exam effects (like nextButton). use 'exam' mode.

import { put, select, call, take, race } from 'redux-saga/effects';
import { actions as uiActions } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { fetchEntities } from '../entities';
import { actions as examActions } from '../../redux/exam';
import { types as sagaTypes } from '../actions';
import getStudyFunctions from '../../helpers/getStudyFunctions';
import { actions as timerActions, types as timerTypes } from '../../redux/timer';
import mapExerciseTypeToSetCurrentAction
  from '../../helpers/mapExerciseTypeToSetCurrentAction';

export function* isDataLoaded() {
  // id is not defined since there is no elementId
  const completed = yield select(selectors.getExamCompleted);
  // reload data if previous exam data from another completed exam is already loaded
  if (completed) {
    yield put(examActions.clean());
    return false;
  }
  const currentExercise = yield select(selectors.getExamCurrentExercise);
  return currentExercise ? true : false;
}

export function* fetchData(episodeId) {
  // Fetch exercise entities, then store exercises array in Exam state slice
  yield call(fetchEntities, [
    '/episode/' + episodeId + '/exam',
    function* cb(response) {
      yield put(
        examActions.setExercises(response.data.data.attributes.exercises)
      );
    }
  ]);
  // TODO: handle fetch error
}

export function checkData() {
  return true;
}

export function* initUi() {
  yield put(uiActions.set('skipButton', false));
}

export function* initStudyData() {
  yield put(examActions.setInitialized(false));
  yield put(examActions.setCompleted(false));
  yield put(timerActions.reset());
}

function* defaultExamUi() {
  yield put(uiActions.set('skipButton', false));
  yield put(uiActions.set('nextButton', false));
  yield put(uiActions.closeHintModal());
  yield put(uiActions.set('playAudioButton', false));
  yield put(uiActions.set('pauseButton', false));
}

function* runExam() {
  const exercises = yield select(selectors.getExamExercises);
  for (let i = 0; i < exercises.size; i++) {
    const exercise = exercises.get(i);
    const type = exercise.get('type');
    const funcs = getStudyFunctions(type + '/');
    const setCurrent = mapExerciseTypeToSetCurrentAction(type);
    yield put(setCurrent(exercise.get('id')));
    yield call(defaultExamUi);
    yield call(funcs.initStudyData);
    yield call(funcs.initUi);
    yield put(examActions.setInitialized(true));
    // NOTE: Each exercise run Saga needs to return a boolean (success or fail)
    const runExercise = yield race({
      success: call(funcs.run, 'exam'),
      exit: take(sagaTypes.EXIT)
    });
    // Stop timer at end of last exercise
    if (i === exercises.size - 1) {
      yield put(timerActions.stop());
    }
    if (runExercise.hasOwnProperty('success')) {
      // Important: initialized needs to be set to false to avoid
      // rendering the next exercise too early, before initializing the data
      // (the exam reducer push the next exercise on correct/wrong answers)
      if (runExercise.success) {
        yield put(examActions.setInitialized(false));
        yield put(examActions.correctAnswer());
      } else {
        yield put(examActions.setInitialized(false));
        yield put(examActions.wrongAnswer());
      }
    }
  }
  yield put(examActions.setCompleted(true));
}

export function* run() {
  yield put(timerActions.start());
  yield race({
    runExam: call(runExam),
    outOfTime: take(timerTypes.OUT_OF_TIME)
  });
  // TODO: Send results to the server
}

export function* clean() {
  yield put(timerActions.stop());
  yield put(examActions.clean());
}
