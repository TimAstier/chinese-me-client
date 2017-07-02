import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../helpers/api';
import normalize from 'json-api-normalizer';

import { actions, types } from '../redux/episodes';

// TODO: use checkNetworks

export function* fetchEpisodes() {
  try {
    const response = yield call(Api.get, '/episodes');
    const entities = normalize(response.data);
    yield put(actions.receivedEntities(entities));
    yield put(actions.fetchSuccess());
  } catch (error) {
    yield put(yield put(actions.fetchFail(error)));
  }
}

export default function* watchFetchEpisodes() {
  yield takeEvery(types.FETCH, fetchEpisodes);
}
