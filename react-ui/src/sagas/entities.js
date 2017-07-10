import { call, put } from 'redux-saga/effects';
import Api from '../utils/api';
import normalize from 'json-api-normalizer';

import { actions } from '../redux/entities';

// TODO: use checkNetworks

export function* fetchEntities(endpoint) {
  try {
    const response = yield call(Api.get, endpoint);
    const entities = normalize(response.data);
    yield put(actions.received(entities));
    yield put(actions.fetchSuccess());
  } catch (error) {
    yield put(yield put(actions.fetchFail(error)));
  }
}
