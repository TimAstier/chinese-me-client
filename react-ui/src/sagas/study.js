/* eslint-disable no-console */
import { put, call, race, take, takeLatest, cancelled } from 'redux-saga/effects';
import { actions as studyActions } from '../redux/study';
import { actions as uiActions } from '../redux/ui';
import { types as sagaTypes } from './actions';
import { elementTypes } from '../constants/study';
// import { elementTypesToTrack } from '../constants/study';
import getStudyFunctions from '../helpers/getStudyFunctions';
import getParamsFromUrl from '../utils/getParamsFromUrl';
import { actions as mapActions } from '../redux/map';
import { replace } from 'react-router-redux';

// Every screenType has those "studyFunctions" (generators):
// 1. isDataLoaded
// 2. fetchData
// 3. checkData
// 4. initStudyData
// 5. initUi
// 6. run
// 7. nextScreen
// 8. clean

export function* runStudySaga(url) {
  let isDataLoaded = undefined;
  // IMPORTANT: start by hiding screen content
  yield put(studyActions.setInitialized(false)); // Hide screen content
  const { episodeId, elementType, elementId, mode }
    = getParamsFromUrl(url); // Get params from url
  // TODO: Clean this
  if (episodeId && episodeId !== 'season') {
    yield put(studyActions.setCurrentEpisodeId(episodeId));
    yield put(mapActions.setFocusedEpisodeId(episodeId));
  }
  const screenType = elementType + '/' + mode; // Define screenType
  const funcs = getStudyFunctions(screenType); // Get studyFunctions
  if (elementTypes.indexOf(elementType) !== -1) { // Check data
    isDataLoaded = yield call(funcs.isDataLoaded, elementId);
    if (!isDataLoaded) { // Fetch data
      yield call(funcs.fetchData, episodeId, elementId);
      // TODO: handle fetch error
    }
  }
  const checkData = yield call(funcs.checkData); // Check if data is sufficient to run the screen
  if (checkData) {
    yield put(uiActions.setDefaultEpisodeScreenUi()); // Init Episode Screen UI
    yield call(funcs.initStudyData); // Init studyData
    yield call(funcs.initUi); // Init UI
    yield put(studyActions.setInitialized(true)); // Display screen content
    // let result;
    try {
      // result = yield call(runScreenSaga, funcs.run); // Run Saga(s) for the screen
      yield call(runScreenSaga, funcs.run); // Run Saga(s) for the screen
    } finally {
      if (funcs.clean) {
        const isCancelled = yield cancelled();
        yield call(funcs.clean, isCancelled);
      }
    }
    // if (elementTypesToTrack.indexOf(elementType) !== -1) { // Save progression on the server
    //   if (result.next) {
    //     const completedCode = 1;
    //     yield call(Api.post, `/${elementType}/${elementId}/completed`, { completedCode, mode });
    //   }
    // }
    if (funcs.nextScreen) {
      yield call(funcs.nextScreen);
    }
  }
  // TODO Send an END signal
}

function* runScreenSaga(run) {
  if (run) {
    return yield race({
      runScreen: call(run),
      next: take(sagaTypes.NEXT),
      exit: take(sagaTypes.EXIT),
      unmount: take(sagaTypes.UNMOUNT_EPISODE_SCREEN)
    });
  }
  return yield race({
    next: take(sagaTypes.NEXT),
    exit: take(sagaTypes.EXIT),
    unmount: take(sagaTypes.UNMOUNT_EPISODE_SCREEN)
  });
}

// This allows to end initScreen (when leaving episodeScreen for example)
export function* finishOrExit(url) {
  return yield race({
    runStudySaga: call(runStudySaga, url),
    unmount: take(sagaTypes.UNMOUNT_EPISODE_SCREEN),
    exit: take(sagaTypes.EXIT)
  });
}

function* runEpisodeScreen(action) {
  if (action.payload.locked) {
    // Redirect users if the episode is locked
    return yield put(replace('/course'));
  }
  return yield call(finishOrExit, action.payload.url);
}

export default function* watchStudySagas() {
  yield takeLatest(sagaTypes.RUN_EPISODE_SCREEN, runEpisodeScreen);
}
