import { call, put } from 'redux-saga/effects';
import Api from '../utils/api';
import normalize from 'json-api-normalizer';

import { actions } from '../redux/entities';

// TODO: use checkNetworks
// Second argument is an optional function that get performed on the response
export function* fetchEntities(params) {
  const endpoint = params[0];
  const cb = params[1];
  try {
    const response = yield call(Api.get, endpoint);
    // The 'exam' route send back entities and other data (exercisesArray)
    const unestedData = response.data.hasOwnProperty('entities')
      ? response.data.entities
      : response.data;
    const entities = normalize(unestedData);
    yield put(actions.received(entities));
    if (cb) {
      yield call(cb, response);
    }
    yield put(actions.fetchSuccess());
  } catch (error) {
    yield put(yield put(actions.fetchFail(error)));
  }
}
