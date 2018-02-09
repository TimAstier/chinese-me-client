import { select, take, call, put, all, takeLatest } from 'redux-saga/effects';
import selectors from '../rootSelectors';
import { types as appTypes } from '../redux/app';
import trim from 'lodash/trim';
import { askQuestion } from './questionModal';
import Api from '../utils/api';
import { actions as settingsActions } from '../redux/settings';
import { types as sagaTypes } from './actions';
import { push } from 'react-router-redux';

function* ensureAppInitialized() {
  const appInitialized = yield select(selectors.app.getInitialized);
  if (!appInitialized) {
    yield take(appTypes.SET_INITIALIZED);
  }
}

export function* loadSettings() {
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

export function* askUserSettings() {
  yield call(ensureAppInitialized);
  // TODO: Move isAuthenticated check into its own saga
  const isAuthenticated = yield select(selectors.auth.getIsAuthenticated);
  if (!isAuthenticated) {
    yield put(push('/login'));
  } else {
    let requiredUserData = yield select(selectors.getRequiredUserData);
    if (requiredUserData) {
      requiredUserData = requiredUserData.map(e => trim(e));
      for (const setting of requiredUserData) {
        // const ask = yield call(shouldAskQuestion, setting);
        // if (ask) {
        yield call(askQuestion, setting);
        // }
      }
    }
  }
}

export default function* watchUserDataSagas() {
  yield all([
    takeLatest(sagaTypes.ASK_USER_SETTINGS, askUserSettings)
  ]);
}
