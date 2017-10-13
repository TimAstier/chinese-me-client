// single entry point to start all Sagas at once
import { all } from 'redux-saga/effects';

import initApp from './sagas/init';
import watchEpisodeSagas from './sagas/episode';
import watchAudioSagas from './sagas/audio';
import watchSignupSagas from './sagas/signup';
import { loginFlow } from './sagas/loginFlow';
import watchSendFeedback from './sagas/feedback';
import watchStudySagas from './sagas/study';
import watchDialogSagas from './sagas/study/dialog';
import watchMapSagas from './sagas/map';
import watchVideoSagas from './sagas/video';
import watchElementsNavSagas from './sagas/elementsNav';
import runTimer from './sagas/timer';
import watchQuestionModalSagas from './sagas/questionModal';

export default function* rootSaga() {
  yield all([
    initApp(),
    watchEpisodeSagas(),
    watchAudioSagas(),
    watchSignupSagas(),
    loginFlow(),
    watchSendFeedback(),
    watchStudySagas(),
    watchDialogSagas(),
    watchMapSagas(),
    watchVideoSagas(),
    watchElementsNavSagas(),
    runTimer(),
    watchQuestionModalSagas()
  ]);
}
