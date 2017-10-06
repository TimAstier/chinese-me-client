import { put, select, call, take, race, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actions as fromUi } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { fetchEntities } from '../entities';
import { actions as examActions } from '../../redux/exam';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { actions as studyActions } from '../../redux/study';
import getStudyFunctions from '../../helpers/getStudyFunctions';

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

export function* initStudyData() {}

function* timer() {
  let time;
  while(true) { // eslint-disable-line
    yield delay(1000);
    time = yield select(selectors.getExamTime);
    if (time === 0) {
      return yield put(sagaActions.outOfTime());
    }
    yield put(examActions.decrementTime());
  }
}

function* runExam() {
  const exercises = yield select(selectors.getExamExercises);
  for (let i = 0; i < exercises.size; i++) {
    const exercise = exercises.get(i);
    const funcs = getStudyFunctions(exercise.get('type') + '/');
    yield put(studyActions.setCurrentMultipleChoiceId(exercise.get('id')));
    yield call(funcs.initStudyData);
    yield put(examActions.setInitialized(true));
    const runExercise = yield race({
      success: call(funcs.run, 'exam'),
      exit: take(sagaTypes.EXIT)
    });
    if (runExercise.hasOwnProperty('success')) {
      if (runExercise.success) {
        yield put(examActions.correctAnswer());
      } else {
        yield put(examActions.wrongAnswer());
      }
    }
    yield put(examActions.setInitialized(false));
  }
}

export function* run() {
  yield fork(timer);
  yield race({
    runExam: call(runExam),
    outOfTime: take(sagaTypes.OUT_OF_TIME)
  });
  // TODO: Send results to the server
}

export function* clean() {
  yield put(examActions.clean());
}
