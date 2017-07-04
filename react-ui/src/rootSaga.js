// single entry point to start all Sagas at once
import { all } from 'redux-saga/effects';

import watchFetchEntities from './sagas/entities';

export default function* rootSaga() {
  yield all([
    watchFetchEntities()
  ]);
}
