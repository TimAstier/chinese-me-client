import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../utils/api';
import normalize from 'json-api-normalizer';

import { actions, types } from '../redux/entities';

// TODO: use checkNetworks

export function* fetchEntities(action) {
  try {
    const response = yield call(Api.get, action.payload.endpoint);
    const entities = normalize(response.data);
    yield put(actions.received(entities));
    yield put(actions.fetchSuccess());
  } catch (error) {
    yield put(yield put(actions.fetchFail(error)));
  }
}

export default function* watchFetchEntities() {
  yield takeEvery(types.FETCH, fetchEntities);
}
