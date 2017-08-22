import { all, takeEvery, put } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { actions as videoActions } from '../redux/video';
import { actions as uiActions } from '../redux/ui';

function* videoEnded() {
  yield put(videoActions.autoPlayOff());
  yield put(uiActions.set('nextButton', true));
}

export default function* watchVideoSagas() {
  yield all([
    takeEvery(sagaTypes.VIDEO_ENDED, videoEnded)
  ]);
}
