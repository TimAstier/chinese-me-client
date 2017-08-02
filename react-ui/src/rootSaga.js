// single entry point to start all Sagas at once
import { all, call, takeEvery, put } from 'redux-saga/effects';

import watchStudyDialogSagas from './sagas/studyDialog';
import watchEpisodeSagas from './sagas/episode';
import watchAudioSagas from './sagas/audio';
import { types } from './sagas/actions';
import { fetchEntities } from './sagas/entities';
import { push } from 'react-router-redux';

export function* init() {
  yield call(fetchEntities, '/episodes');
  yield put(push('/select'));
}

export default function* rootSaga() {
  yield all([
    watchStudyDialogSagas(),
    watchEpisodeSagas(),
    watchAudioSagas(),
    takeEvery(types.INIT, init)
  ]);
}
