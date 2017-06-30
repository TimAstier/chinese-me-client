import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../helpers/api';

import episodesDeserializer from '../utils/deserializers/episode';
import { actions, types } from '../redux/episodes';

// TODO: use checkNetworks

export function* fetchEpisodes() {
  try {
    const response = yield call(Api.get, '/episodes');
    const data = episodesDeserializer(response.data);
    yield put(actions.set(data));
    yield put(actions.fetchSuccess());
  } catch (error) {
    yield put(yield put(actions.fetchFail(error)));
  }
}

export default function* watchFetchEpisodes() {
  yield takeEvery(types.FETCH, fetchEpisodes);
}
