import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../helpers/api';
import normalize from 'json-api-normalizer';

import { actions, types } from '../redux/dialogs';

// TODO: use checkNetworks

// TODO: DRY this into a fetch Saga

export function* fetchDialogs(action) {
  try {
    const response = yield call(Api.get, action.endpoint);
    const entities = normalize(response.data);
    yield put(actions.receivedEntities(entities));
    yield put(actions.fetchSuccess());
  } catch (error) {
    yield put(yield put(actions.fetchFail(error)));
  }
}

export default function* watchFetchEpisodes() {
  yield takeEvery(types.FETCH, fetchDialogs);
}
