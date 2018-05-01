import { takeEvery, call, put } from 'redux-saga/effects';
import { actions as sagaActions, types as sagaTypes } from './actions';
import Api from '../utils/api';
import { loadSettings } from './userSettings';

function* unlockSeason(action) {
  try {
    const response = yield call(Api.post, '/user-season', action.payload);
    if (response.status === 200) {
      yield call(loadSettings);
      yield put(sagaActions.reloadApp());
    }
  } catch (error) {
    // TODO: handle errors
  }
}

export default function* watchStoreSagas() {
  yield takeEvery(sagaTypes.UNLOCK_SEASON, unlockSeason);
}
