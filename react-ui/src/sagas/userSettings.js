import { call, put } from 'redux-saga/effects';
import Api from '../utils/api';
import { actions as settingsActions } from '../redux/settings';

export function* loadSettings() {
  try {
    const savedSettings = yield call(Api.get, '/users/settings');
    // we don't pass a userId because we dont need to identify
    yield put(settingsActions.set(null, savedSettings.data));
    return savedSettings.data;
  } catch (error) {
  // TODO: handle errors
  }
}
