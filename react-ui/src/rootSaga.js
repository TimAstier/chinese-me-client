// single entry point to start all Sagas at once
import { all } from 'redux-saga/effects';

import watchFetchEntities from './sagas/entities';
import watchNextSentence from './sagas/studyDialog';

export default function* rootSaga() {
  yield all([
    watchFetchEntities(),
    watchNextSentence()
  ]);
}
