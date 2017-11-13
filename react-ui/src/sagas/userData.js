import { select, take, call, put, all, takeEvery } from 'redux-saga/effects';
import selectors from '../rootSelectors';
import { types as appTypes } from '../redux/app';
import trim from 'lodash/trim';
import { shouldAskQuestion, askQuestion } from './questionModal';
import Api from '../utils/api';
import { actions as settingsActions } from '../redux/settings';
import { types as sagaTypes } from './actions';

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
  let requiredUserData = yield select(selectors.getRequiredUserData);
  if (requiredUserData) {
    requiredUserData = requiredUserData.map(e => trim(e));
    for (const setting of requiredUserData) {
      const ask = yield call(shouldAskQuestion, setting);
      if (ask) {
        yield call(askQuestion, setting);
      }
    }
  }
}

export default function* watchUserDataSagas() {
  yield all([
    takeEvery(sagaTypes.ASK_USER_SETTINGS, askUserSettings)
  ]);
}
