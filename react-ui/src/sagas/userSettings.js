import { select, call, put } from 'redux-saga/effects';
import selectors from '../rootSelectors';
import Api from '../utils/api';
import { actions as settingsActions } from '../redux/settings';

export function* loadSettings() {
  // Load settings if not already initialized
  const settingsInitialized = yield select(selectors.settings.getInitialized);
  if (settingsInitialized === false) {
    try {
      const savedSettings = yield call(Api.get, '/users/settings');
      // we don't pass a userId because we dont need to identify
      yield put(settingsActions.set(null, savedSettings.data));
    } catch (error) {
      // TODO: handle errors
    }
  }
}
