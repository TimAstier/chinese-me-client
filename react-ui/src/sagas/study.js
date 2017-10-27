/* eslint-disable no-console */
import { put, call, race, take, takeLatest, cancelled, select } from 'redux-saga/effects';
import { actions as studyActions } from '../redux/study';
import { actions as uiActions } from '../redux/ui';
import { actions as mapActions } from '../redux/map';
import { elementTypes, elementTypesToTrack } from '../constants/study';
import { actions as sagaActions, types as sagaTypes } from './actions';
import getStudyFunctions from '../helpers/getStudyFunctions';
import getParamsFromUrl from '../utils/getParamsFromUrl';
import Api from '../utils/api';
import { askQuestion } from './questionModal';
import screenTypeToUserSettings from '../utils/screenTypeToUserSettings';
import selectors from '../rootSelectors';
import { actions as settingsActions } from '../redux/settings';

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
  let shouldUrlBeSkipped = false;
  let isDataLoaded = undefined;
  yield put(studyActions.setInitialized(false)); // Hide screen content
  // Load settings if not already initialized
  const settingsInitialized = yield select(selectors.getSettingsInitialized);
  if (settingsInitialized === false) {
    try {
      const savedSettings = yield call(Api.get, '/users/settings');
      yield put(settingsActions.set(savedSettings.data));
    } catch (error) {
      // TODO: handle errors
    }
  }
  const { episodeId, elementType, elementId, mode }
    = getParamsFromUrl(action.payload.url); // Get params from url
  yield put(studyActions.setCurrentEpisodeId(episodeId)); // Set currentEpisodeId
  yield put(mapActions.setFocusedEpisodeId(episodeId)); // Set focusedEpisodeId
  const screenType = elementType + '/' + mode; // Define screenType
  // Skip screen if there is a related setting set to false
  const setting = screenTypeToUserSettings(screenType);
  if (screenType) {
    const userSettings = yield select(selectors.getSettings);
    const userSetting = userSettings.get(setting);
    if (userSetting === false) {
      shouldUrlBeSkipped = true;
      return yield put(sagaActions.nextScreen(shouldUrlBeSkipped));
    }
  }
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
    // If the screenType depends on a setting which if not already defined,
    // ask user's preference. We don't ask in case of a Skip from the user.
    if (!result.skip) {
      yield call(askQuestion, screenType);
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
