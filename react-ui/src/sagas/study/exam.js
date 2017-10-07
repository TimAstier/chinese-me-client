// HOW TO add a new exercise type:
// 1. Retrieve data and exercise element from server (update service, serializer)
// 2. Update Exam container to render appropriate container
// 3. Be sure the exerciseType is supported
//   - setCurrentXXX in runExam saga
//   - in getStudyFunctions
// 4. Update exercise saga to
//   - return success bool
//   - avoid non-exam effects (like nextButton). use 'exam' mode.

import { put, select, call, take, race } from 'redux-saga/effects';
import { actions as fromUi } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { fetchEntities } from '../entities';
import { actions as examActions } from '../../redux/exam';
import { types as sagaTypes } from '../actions';
import { actions as studyActions } from '../../redux/study';
import getStudyFunctions from '../../helpers/getStudyFunctions';
import { capitalizeFirstLetter } from '../../utils/strings';
import { defaultEpisodeScreenUi } from '../study';
import { actions as timerActions, types as timerTypes } from '../../redux/timer';

export function* isDataLoaded() {
  // id is not defined since there is no elementId
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
  yield put(fromUi.set('skipButton', false));
  yield put(fromUi.set('nextButton', false));
}

export function* initStudyData() {
  yield put(examActions.setInitialized(false));
  yield put(timerActions.reset());
}

function* runExam() {
  const exercises = yield select(selectors.getExamExercises);
  for (let i = 0; i < exercises.size; i++) {
    const exercise = exercises.get(i);
    let type = exercise.get('type');
    const funcs = getStudyFunctions(type + '/');
    // TODO: Find a solution to get consistent Types
    // Here: use a mapping function: mapTypeToStateSlice
    if (type === 'characterPinyin') {
      type = 'character';
    }
    yield put(studyActions[`setCurrent${capitalizeFirstLetter(type)}Id`](exercise.get('id')));
    yield call(defaultEpisodeScreenUi);
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
}

export function* run() {
  // yield fork(timer);
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
