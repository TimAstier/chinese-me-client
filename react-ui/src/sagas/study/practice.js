import { put, select, call, take, race } from 'redux-saga/effects';
import { actions as uiActions } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { fetchEntities } from '../entities';
import { actions as practiceActions } from '../../redux/practice';
import { types as sagaTypes, actions as sagaActions } from '../actions';
import { actions as studyActions } from '../../redux/study';
import getStudyFunctions from '../../helpers/getStudyFunctions';
import { push } from 'react-router-redux';
import getParamsFromUrl from '../../utils/getParamsFromUrl';
import Api from '../../utils/api';
import unsavedExerciseTypes from '../../constants/unsavedExerciseTypes';

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
      yield put(
        practiceActions.setType(response.data.data.attributes.type)
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
  yield put(practiceActions.setError(false));
}

function* defaultExamUi() {
  yield put(uiActions.set('nextButton', false));
  yield put(uiActions.closeHintModal());
  yield put(uiActions.set('playAudioButton', false));
  yield put(uiActions.set('pauseButton', false));
}

export function* run() {
  // Tracking properties
  const isAuthenticated = yield select(selectors.auth.getIsAuthenticated);
  const currentEpisode = yield select(selectors.getCurrentEpisode);
  const currentSeason = yield select(selectors.getCurrentSeason);
  const currentUrl = yield select(selectors.routing.getCurrentUrl);
  const trackingProperties = {
    episodeCode: `S${currentSeason.get('number')}E${currentEpisode.get('number')}`,
    practiceId: currentUrl.split('/')[4]
  };
  // END Tracking properties
  yield put(practiceActions.startedPractice(trackingProperties));
  let completed = false;
  const total = yield select(selectors.practice.getExercisesSize);
  yield put(practiceActions.setTotal(total));
  while (completed === false) {
    const exercise = yield select(selectors.practice.getCurrentExercise);
    if (!exercise) {
      // This practice has no exercises
      yield put(practiceActions.setError(true));
      yield put(uiActions.set('nextButton', true));
      return yield take(sagaTypes.NEXT);
    }
    const type = exercise.get('type');
    const funcs = getStudyFunctions(type + '/');
    yield put(studyActions.setCurrentExerciseId(exercise.get('id')));
    yield call(defaultExamUi);
    yield call(funcs.initStudyData);
    yield call(funcs.initUi, type);
    yield put(practiceActions.setInitialized(true));
    // NOTE: Each exercise run Saga needs to return a result object with shape:
    // {
    //   isCorrect (boolean)
    //   value (string)
    // }
    const runExercise = yield race({
      result: call(funcs.run, false, type),
      exit: take(sagaTypes.EXIT)
    });
    if (runExercise.hasOwnProperty('result')) {
      // Important: initialized needs to be set to false to avoid
      // rendering the next exercise too early, before initializing the data
      // (the practice reducer push the next exercise on correct/wrong answers)
      yield put(practiceActions.setInitialized(false));
      if (runExercise.result.isCorrect) {
        yield put(practiceActions.correctAnswer());
      } else {
        yield put(practiceActions.wrongAnswer());
      }
      // Save answer in the DB:
      // TODO: save number of errors for characterStroke
      if (unsavedExerciseTypes.indexOf(type) === -1) {
        yield put(sagaActions.saveAnswer({
          exerciseId: exercise.get('id'),
          ...runExercise.result
        }));
      }
    }
    const nextExercise = yield select(selectors.practice.getCurrentExercise);
    if (!nextExercise) {
      completed = true;
    }
  }
  yield put(studyActions.setCurrentExerciseId(null));
  yield put(sagaActions.playLevelWinSound());
  // Tracking
  yield put(practiceActions.completedPractice(trackingProperties));
  // End Tracking
  // Save score in DB
  // Might be better to save currentPracticeId in the state
  if (isAuthenticated) {
    const url = yield select(selectors.routing.getCurrentUrl);
    const { elementId } = getParamsFromUrl(url);
    yield call(Api.post, `/practice/${elementId}/completed`);
  }
  // END Save score in DB
  yield put(sagaActions.reloadApp());
  yield put(uiActions.set('nextButton', true));
  return yield take(sagaTypes.NEXT);
}

export function* nextScreen() {
  const url = yield select(selectors.getBackUrl);
  return yield put(push(url));
}

// export function* clean() {}
