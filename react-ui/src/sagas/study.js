/* eslint-disable no-console */
import { takeEvery, put, call, race, take } from 'redux-saga/effects';
import { types as studyTypes, actions as studyActions } from '../redux/study';
import { elementTypes } from '../constants/study';
import { types as sagaTypes } from './actions';
import mapScreenTypeToModule from '../helpers/mapScreenTypeToModule';

// Every screenType has those five "studyFunctions" (generators):
// 1. checkData
// 2. fetchData
// 3. initStudyData
// 4. initUi
// 5. run

function* initScreen(action) {
  yield put(studyActions.setInitialized(false)); // Hide screen content
  const { episodeId, elementType, elementId, mode }
    = getParams(action.payload.url); // Get params from url
  const screenType = elementType + '/' + mode; // Define screenType
  const funcs = getStudyFunctions(screenType); // Get studyFunctions
  let isDataLoaded = undefined;
  if (elementTypes.indexOf(elementType) !== -1) { // Check data
    isDataLoaded = yield call(funcs.checkData, elementId);
  }
  if (!isDataLoaded) { // Fetch data
    yield call(funcs.fetchData, episodeId);
  }
  yield call(funcs.initStudyData); // Init studyData
  yield call(funcs.initUi); // Init UI
  yield put(studyActions.setInitialized(true)); // Display screen content
  return yield call(runScreenSaga, funcs.run); // Run Saga(s) for the screen
}

function getParams(url) {
  const routeParams = url.split('/');
  return {
    episodeId: routeParams[2],
    elementType: routeParams[3],
    elementId: routeParams[4] || undefined,
    mode: routeParams[5] || ''
  };
}

function getStudyFunctions(screenType) {
  const module = mapScreenTypeToModule(screenType);
  return {
    checkData: module.checkData,
    fetchData: module.fetchData,
    initStudyData: module.initStudyData,
    initUi: module.initUi,
    run: module.run
  };
}

function* runScreenSaga(runFunction) {
  return yield race({
    runScreen: call(runFunction),
    next: take(sagaTypes.NEXT),
    skip: take(sagaTypes.SKIP)
  });
}

export default function* watchStudySagas() {
  yield takeEvery(studyTypes.INIT_SCREEN, initScreen);
}
