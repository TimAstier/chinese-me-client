import { put, select, call, take, race } from 'redux-saga/effects';
import { actions as uiActions } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { fetchEntities } from '../entities';
import { actions as examActions } from '../../redux/exam';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { actions as studyActions } from '../../redux/study';
import getStudyFunctions from '../../helpers/getStudyFunctions';
import { push } from 'react-router-redux';
import unsavedExerciseTypes from '../../constants/unsavedExerciseTypes';

export function* isDataLoaded() {
  // id is not defined since there is no elementId
  const completed = yield select(selectors.exam.getCompleted);
  // reload data if previous exam data from another completed exam is already loaded
  if (completed) {
    yield put(examActions.clean());
    return false;
  }
  const currentExercise = yield select(selectors.exam.getCurrentExercise);
  return currentExercise ? true : false;
}

export function* fetchData(episodeId) {
  // Fetch exercise entities, then store exercises array in Exam state slice
  yield call(fetchEntities, [
    '/episode/' + episodeId + '/exam',
    function* cb(response) {
      yield put(
        examActions.setExercises(response.data.exercisesArray)
      );
    }
  ]);
  // TODO: handle fetch error
}

export function checkData() {
  return true;
}

export function* initUi() {}

export function* initStudyData() {
  yield put(examActions.setInitialized(false));
  yield put(examActions.setCompleted(false));
}

function* defaultExamUi() {
  yield put(uiActions.set('nextButton', false));
  yield put(uiActions.closeHintModal());
  yield put(uiActions.set('playAudioButton', false));
  yield put(uiActions.set('pauseButton', false));
}

function* runExam() {
  // Tracking properties
  const currentEpisode = yield select(selectors.getCurrentEpisode);
  const currentSeason = yield select(selectors.getCurrentSeason);
  const trackingProperties = {
    episodeCode: `S${currentSeason.get('number')}E${currentEpisode.get('number')}`
  };
  // END Tracking properties
  yield put(examActions.startedExam(trackingProperties));
  const exercises = yield select(selectors.exam.getExercises);
  for (let i = 0; i < exercises.size; i++) {
    const exercise = exercises.get(i);
    const type = exercise.get('type');
    const funcs = getStudyFunctions(type + '/');
    yield put(studyActions.setCurrentExerciseId(exercise.get('id')));
    yield call(defaultExamUi);
    yield call(funcs.initStudyData);
    yield call(funcs.initUi, type);
    yield put(examActions.setInitialized(true));
    // NOTE: Each exercise run Saga needs to return a result object with shape:
    // {
    //   isCorrect (boolean)
    //   value (string)
    // }
    const runExercise = yield race({
      result: call(funcs.run, true, type),
      exit: take(sagaTypes.EXIT)
    });
    if (runExercise.hasOwnProperty('result')) {
      // Important: initialized needs to be set to false to avoid
      // rendering the next exercise too early, before initializing the data
      // (the exam reducer push the next exercise on correct/wrong answers)
      yield put(examActions.setInitialized(false));
      if (runExercise.result.isCorrect) {
        yield put(examActions.correctAnswer());
      } else {
        yield put(examActions.wrongAnswer());
      }
      // Save answer in the DB:
      if (unsavedExerciseTypes.indexOf(type) === -1) {
        yield put(sagaActions.saveAnswer({
          exerciseId: exercise.get('id'),
          ...runExercise.result
        }));
      }
    }
  }
}

export function* run() {
  yield call(runExam);
  yield put(examActions.setCompleted(true));
}

export function* nextScreen() {
  const url = yield select(selectors.routing.getCurrentUrl);
  yield put(push(url.replace('exam', 'result')));
}

export function* clean(isCancelled) {
  if (isCancelled) {
    yield put(examActions.clean());
  }
}
