// single entry point to start all Sagas at once
import { all } from 'redux-saga/effects';

import { initApp, reloadApp } from './sagas/init';
import watchEpisodeSagas from './sagas/episode';
import watchAudioSagas from './sagas/audio';
import watchSignupSagas from './sagas/signup';
import { watchLogin, watchLogout } from './sagas/loginFlow';
import watchSendFeedback from './sagas/feedback';
import watchStudySagas from './sagas/study';
import watchDialogSagas from './sagas/study/dialog';
import watchMapSagas from './sagas/map';
import watchVideoSagas from './sagas/video';
import runTimer from './sagas/timer';
import watchBookSagas from './sagas/book';
// import watchUserSettingsSagas from './sagas/userSettings';
import { watchSaveAnswer } from './sagas/answers';
import watchCodesSagas from './sagas/codes';
import watchStoreSagas from './sagas/store';
import browserNotice from './sagas/browserNotice';

export default function* rootSaga() {
  yield all([
    initApp(),
    reloadApp(),
    watchEpisodeSagas(),
    watchAudioSagas(),
    watchSignupSagas(),
    watchLogin(),
    watchLogout(),
    watchSendFeedback(),
    watchStudySagas(),
    watchDialogSagas(),
    watchMapSagas(),
    watchVideoSagas(),
    runTimer(),
    watchBookSagas(),
    // watchUserSettingsSagas(),
    watchSaveAnswer(),
    watchCodesSagas(),
    watchStoreSagas(),
    browserNotice()
  ]);
}
