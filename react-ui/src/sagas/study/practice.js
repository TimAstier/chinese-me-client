import { put, select, call, take, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actions as uiActions } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { fetchEntities } from '../entities';
import { actions as practiceActions } from '../../redux/practice';
import { types as sagaTypes, actions as sagaActions } from '../actions';
import getStudyFunctions from '../../helpers/getStudyFunctions';
import mapExerciseTypeToSetCurrentAction
  from '../../helpers/mapExerciseTypeToSetCurrentAction';
import { push } from 'react-router-redux';

export function* isDataLoaded() {
  // id is not defined since there is no elementId
  const currentExercise = yield select(selectors.practice.getCurrentExercise);
  return currentExercise ? true : false;
}

export function* fetchData(episodeId, elementId) {
  // Fetch exercise entities, then store exercises array in Exam state slice
  yield call(fetchEntities, [
    '/episode/' + episodeId + '/practice/' + elementId,
    function* cb(response) {
      yield put(
        practiceActions.setExercises(response.data.data.attributes.exercisesArray)
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
  yield put(practiceActions.setInitialized(false));
}

function* defaultExamUi() {
  yield put(uiActions.set('nextButton', false));
  yield put(uiActions.closeHintModal());
  yield put(uiActions.set('playAudioButton', false));
  yield put(uiActions.set('pauseButton', false));
}

export function* run() {
  let completed = false;
  const total = yield select(selectors.practice.getExercisesSize);
  yield put(practiceActions.setTotal(total));
  while (completed === false) {
    const exercise = yield select(selectors.practice.getCurrentExercise);
    const type = exercise.get('type');
    const funcs = getStudyFunctions(type + '/');
    const setCurrent = mapExerciseTypeToSetCurrentAction(type);
    yield put(setCurrent(exercise.get('elementId')));
    yield call(defaultExamUi);
    yield call(funcs.initStudyData);
    yield call(funcs.initUi);
    yield put(practiceActions.setInitialized(true));
    yield race({
      run: call(funcs.run, 'practice'),
      exit: take(sagaTypes.EXIT)
    });
    const nextExercise = yield select(selectors.practice.getCurrentExercise);
    if (!nextExercise) {
      completed = true;
    }
  }
  // yield delay(1000);
  yield put(sagaActions.playLevelWinSound());
  yield put(uiActions.set('nextButton', true));
  yield take(sagaTypes.NEXT);
}

export function* nextScreen() {
  const url = yield select(selectors.getCurrentBookUrl);
  yield put(push(url));
}

export function* clean(isCancelled) {
  if (isCancelled) {
    yield put(practiceActions.clean());
  }
}
