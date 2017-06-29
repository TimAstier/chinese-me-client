// single entry point to start all Sagas at once
import { all } from 'redux-saga/effects';

import watchFetchEpisodes from './sagas/episodes';

export default function* rootSaga() {
  yield all([
    watchFetchEpisodes()
  ]);
}
