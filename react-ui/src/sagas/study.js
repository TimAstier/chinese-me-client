/* eslint-disable no-console */
import { put, call, race, take, takeLatest, cancelled, select } from 'redux-saga/effects';
import { actions as studyActions } from '../redux/study';
import { actions as uiActions } from '../redux/ui';
import { elementTypes, elementTypesToTrack } from '../constants/study';
import { actions as sagaActions, types as sagaTypes } from './actions';
import getStudyFunctions from '../helpers/getStudyFunctions';
import getParamsFromUrl from '../utils/getParamsFromUrl';
import Api from '../utils/api';
import screenTypeToUserSettings from '../utils/screenTypeToUserSettings';
import selectors from '../rootSelectors';
import { actions as settingsActions } from '../redux/settings';
import { askUserSettings } from './userData';

// Every screenType has those five "studyFunctions" (generators):
// 1. isDataLoaded
// 2. fetchData
// 3. checkData
// 4. initStudyData
// 5. initUi
// 6. run
// 7. clean

function* loadSettings() {
  // Load settings if not already initialized
  const settingsInitialized = yield select(selectors.settings.getInitialized);
  if (settingsInitialized === false) {
    try {
      const savedSettings = yield call(Api.get, '/users/settings');
      yield put(settingsActions.set(savedSettings.data));
    } catch (error) {
      // TODO: handle errors
    }
  }
}

function* checkUserPreference(screenType, shouldUrlBeSkipped) {
  // Skip screen if there is a related setting set to false
  let skip = shouldUrlBeSkipped;
  const setting = screenTypeToUserSettings(screenType);
  if (screenType) {
    const userSettings = yield select(selectors.settings.getSettings);
    const userSetting = userSettings.get(setting);
    if (userSetting === false) {
      skip = true;
      yield put(sagaActions.nextScreen(skip));
    }
  }
}

export function* runStudySaga(url) {
  // IMPORTANT: start by hiding screen content
  let shouldUrlBeSkipped = false;
  let isDataLoaded = undefined;
  yield put(studyActions.setInitialized(false)); // Hide screen content
  yield call(loadSettings);
  const { episodeId, elementType, elementId, mode }
    = getParamsFromUrl(url); // Get params from url
  yield call(askUserSettings); // Ask user data if needed
  const screenType = elementType + '/' + mode; // Define screenType
  yield call(checkUserPreference, screenType, shouldUrlBeSkipped);
  const funcs = getStudyFunctions(screenType); // Get studyFunctions
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
  if (checkData) {
    yield put(uiActions.setDefaultEpisodeScreenUi()); // Init Episode Screen UI
    yield call(funcs.initStudyData); // Init studyData
    yield call(funcs.initUi); // Init UI
    yield put(studyActions.setInitialized(true)); // Display screen content
    let result;
    try {
      result = yield call(runScreenSaga, funcs.run); // Run Saga(s) for the screen
    } finally {
      if (funcs.clean) {
        const isCancelled = yield cancelled();
        yield call(funcs.clean, isCancelled);
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
  yield put(sagaActions.nextScreen(shouldUrlBeSkipped)); // Go to next screen
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

// This allows to end initScreen (when leaving episodeScreen for example)
export function* finishOrExit(url) {
  return yield race({
    runStudySaga: call(runStudySaga, url),
    unmount: take(sagaTypes.UNMOUNT_EPISODE_SCREEN),
    exit: take(sagaTypes.EXIT)
  });
}

function* runEpisodeScreen(action) {
  yield call(finishOrExit, action.payload.url);
}

export default function* watchStudySagas() {
  yield takeLatest(sagaTypes.RUN_EPISODE_SCREEN, runEpisodeScreen);
}
