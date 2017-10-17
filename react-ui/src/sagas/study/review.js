import { put, select, call, take, race } from 'redux-saga/effects';
import { actions as uiActions } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { fetchEntities } from '../entities';
import { actions as reviewActions } from '../../redux/review';
import { types as sagaTypes } from '../actions';
import getStudyFunctions from '../../helpers/getStudyFunctions';
import mapExerciseTypeToSetCurrentAction
  from '../../helpers/mapExerciseTypeToSetCurrentAction';

export function* isDataLoaded() {
  // id is not defined since there is no elementId
  const currentExercise = yield select(selectors.getReviewCurrentExercise);
  return currentExercise ? true : false;
}

export function* fetchData(episodeId) {
  // Fetch exercise entities, then store exercises array in Exam state slice
  yield call(fetchEntities, [
    '/episode/' + episodeId + '/review',
    function* cb(response) {
      yield put(
        reviewActions.setExercises(response.data.data.attributes.exercises)
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
  yield put(reviewActions.setInitialized(false));
}

function* defaultExamUi() {
  yield put(uiActions.set('skipButton', false));
  yield put(uiActions.set('nextButton', false));
  yield put(uiActions.closeHintModal());
  yield put(uiActions.set('playAudioButton', false));
  yield put(uiActions.set('pauseButton', false));
}

export function* run() {
  let completed = false;
  while (completed === false) {
    const exercise = yield select(selectors.getReviewCurrentExercise);
    const type = exercise.get('type');
    const funcs = getStudyFunctions(type + '/');
    const setCurrent = mapExerciseTypeToSetCurrentAction(type);
    yield put(setCurrent(exercise.get('id')));
    yield call(defaultExamUi);
    yield call(funcs.initStudyData);
    yield call(funcs.initUi);
    yield put(reviewActions.setInitialized(true));
    yield race({
      run: call(funcs.run, 'review'),
      exit: take(sagaTypes.EXIT)
    });
    const nextExercise = yield select(selectors.getReviewCurrentExercise);
    if (!nextExercise) {
      completed = true;
    }
  }
}

export function* clean() {
  yield put(reviewActions.clean());
}
