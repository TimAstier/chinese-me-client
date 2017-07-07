// single entry point to start all Sagas at once
import { all } from 'redux-saga/effects';

import watchFetchEntities from './sagas/entities';
import studyDialog from './sagas/studyDialog';
import audio from './sagas/audio';

export default function* rootSaga() {
  yield all([
    watchFetchEntities(),
    studyDialog(),
    audio()
  ]);
}
