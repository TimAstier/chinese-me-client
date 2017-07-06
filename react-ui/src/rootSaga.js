// single entry point to start all Sagas at once
import { all } from 'redux-saga/effects';

import watchFetchEntities from './sagas/entities';
import studyDialog from './sagas/studyDialog';

export default function* rootSaga() {
  yield all([
    watchFetchEntities(),
    studyDialog()
  ]);
}
