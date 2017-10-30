import { all, takeEvery, put } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { actions as videoActions } from '../redux/video';

function* videoEnded() {
  yield put(videoActions.autoPlayOff());
}

export default function* watchVideoSagas() {
  yield all([
    takeEvery(sagaTypes.VIDEO_ENDED, videoEnded)
  ]);
}
