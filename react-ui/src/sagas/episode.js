/* eslint-disable no-constant-condition */
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { types as studyTypes} from '../redux/study';
import { types as sagaTypes } from './actions';
import { actions as entitiesActions } from '../redux/entities';
import { init } from '../rootSaga';
import { playDialogs } from './studyDialog';

function* playEpisode(action) {
  try {
    // playCharacters
    // playGrammars
    yield call(playDialogs, action.payload.id);
    // playReview
    // playFinalTest
  } finally {
    yield call(exitEpisode);
  }
}

function* exitEpisode() {
  yield put(entitiesActions.clear());
  yield call(init);
}

export default function* watchEpisodeSagas() {
  yield all([
    takeEvery(studyTypes.START_EPISODE, playEpisode),
    takeEvery(sagaTypes.EXIT, exitEpisode)
  ]);
}
