// single entry point to start all Sagas at once
import { all, call, takeEvery } from 'redux-saga/effects';

import watchStudyDialogSagas from './sagas/studyDialog';
import watchEpisodeSagas from './sagas/episode';
import watchAudioSagas from './sagas/audio';
import { types } from './sagas/actions';
import { fetchEntities } from './sagas/entities';
import watchSignupSagas from './sagas/signup';
import { loginFlow } from './sagas/loginFlow';
import watchSendFeedback from './sagas/feedback';

export function* fetchEpisodes() {
  yield call(fetchEntities, '/episodes');
}

export default function* rootSaga() {
  yield all([
    watchStudyDialogSagas(),
    watchEpisodeSagas(),
    watchAudioSagas(),
    takeEvery(types.FETCH_EPISODES, fetchEpisodes),
    watchSignupSagas(),
    loginFlow(),
    watchSendFeedback()
  ]);
}
