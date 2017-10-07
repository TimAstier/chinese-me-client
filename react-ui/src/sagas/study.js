/* eslint-disable no-console */
import { put, call, race, take, takeLatest, cancelled } from 'redux-saga/effects';
import { actions as studyActions } from '../redux/study';
import { actions as uiActions } from '../redux/ui';
import { actions as mapActions } from '../redux/map';
import { elementTypes, elementTypesToTrack } from '../constants/study';
import { actions as sagaActions, types as sagaTypes } from './actions';
import getStudyFunctions from '../helpers/getStudyFunctions';
import getParamsFromUrl from '../utils/getParamsFromUrl';
import Api from '../utils/api';

// Every screenType has those five "studyFunctions" (generators):
// 1. isDataLoaded
// 2. fetchData
// 3. checkData
// 4. initStudyData
// 5. initUi
// 6. run
// 7. clean

function* runEpisodeScreen(action) {
  // IMPORTANT: start by hiding screen content
  yield put(studyActions.setInitialized(false)); // Hide screen content
  yield call(defaultEpisodeScreenUi); // Init Episode Screen UI
  const { episodeId, elementType, elementId, mode }
    = getParamsFromUrl(action.payload.url); // Get params from url
  yield put(studyActions.setCurrentEpisodeId(episodeId)); // Set currentEpisodeId
  yield put(mapActions.setFocusedEpisodeId(episodeId)); // Set focusedEpisodeId
  const screenType = elementType + '/' + mode; // Define screenType
  const funcs = getStudyFunctions(screenType); // Get studyFunctions
  let isDataLoaded = undefined;
  if (elementTypes.indexOf(elementType) !== -1) { // Check data
    isDataLoaded = yield call(funcs.isDataLoaded, elementId);
  } else {
    isDataLoaded = true;
  }
  if (!isDataLoaded) { // Fetch data
    yield call(funcs.fetchData, episodeId);
    // TODO: handle fetch error
  }
  const checkData = yield call(funcs.checkData); // Check if data is sufficient to run the screen
  let shouldUrlBeSkipped = false;
  if (checkData) {
    yield call(funcs.initStudyData); // Init studyData
    yield call(funcs.initUi); // Init UI
    yield put(studyActions.setInitialized(true)); // Display screen content
    let result;
    try {
      result = yield call(runScreenSaga, funcs.run); // Run Saga(s) for the screen
    } finally {
      if (yield cancelled()) {
        if (funcs.clean) {
          yield call(funcs.clean);
        }
      }
    }
    if (elementTypesToTrack.indexOf(elementType) !== -1) { // Save progression on the server
      if (result.skip || result.next) {
        const completedCode = result.skip ? 1 : 2;
        yield call(Api.post, `/${elementType}/${elementId}/completed`, { completedCode, mode });
      }
    }
  } else {
    shouldUrlBeSkipped = true;
  }
  return yield put(sagaActions.nextScreen(shouldUrlBeSkipped)); // Go to next screen
}

function* runScreenSaga(run) {
  if (run) {
    return yield race({
      runScreen: call(run),
      next: take(sagaTypes.NEXT),
      skip: take(sagaTypes.SKIP),
      exit: take(sagaTypes.EXIT)
    });
  }
  return yield race({
    next: take(sagaTypes.NEXT),
    skip: take(sagaTypes.SKIP),
    exit: take(sagaTypes.EXIT)
  });
}

export function* defaultEpisodeScreenUi() {
  yield put(uiActions.set('skipButton', true));
  yield put(uiActions.set('nextButton', false));
  yield put(uiActions.closeModal());
  yield put(uiActions.set('playAudioButton', false));
  yield put(uiActions.set('pauseButton', false));
}

// This allows to end initScreen (when leaving episodeScreen for example)
export function* finishOrExit(action) {
  return yield race({
    runEpisodeScreen: call(runEpisodeScreen, action),
    unmount: take(sagaTypes.UNMOUNT_EPISODE_SCREEN),
    exit: take(sagaTypes.EXIT)
  });
}

export default function* watchStudySagas() {
  yield takeLatest(sagaTypes.RUN_EPISODE_SCREEN, finishOrExit);
}
