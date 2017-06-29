import { call, put, takeEvery } from 'redux-saga/effects';
import { Api } from '../helpers/api';

import episodesDeserializer from '../utils/deserializers/episode';
import { set, fetchSuccess, fetchFail, types } from '../redux/episodes';

const api = new Api();

function* fetchEpisodes() {
  try {
    const response = yield call(api.get('/episodes'));
    const data = episodesDeserializer(response.data);
    yield put(set(data));
    yield put(fetchSuccess());
  } catch (error) {
    yield put(yield put(fetchFail(error)));
  }
}

export default function* watchFetchEpisodes() {
  yield takeEvery(types.FETCH, fetchEpisodes);
}
