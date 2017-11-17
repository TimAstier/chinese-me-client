/* eslint-disable no-constant-condition */
import { takeEvery, put, all } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { actions as studyActions } from '../redux/study';
// import { actions as entitiesActions } from '../redux/entities';
import { actions as uiActions } from '../redux/ui';
import { actions as mapActions } from '../redux/map';
import { push } from 'react-router-redux';

// function* unmount() {
//   yield put(mapActions.setFocusedEpisodeId(null));
//   yield put(studyActions.setCurrentEpisodeId(null));
//   yield put(studyActions.setInitialized(false));
//   // Only clear entities directly linked to ONE episode
//   yield put(entitiesActions.clearAllBut(['episodes', 'seasons']));
// }

function* exit() {
  yield put(push('/study'));
}

function* askQuestion() {
  yield put(uiActions.openFeedbackModal());
}

function* startEpisode(action) {
  const { seasonNumber, episodeNumber } = action.payload;
  const url = `/study/season/${seasonNumber}/episode/${episodeNumber}`;
  return yield put(push(url));
}

function* setEpisodeData(action) {
  yield put(studyActions.setCurrentEpisodeId(action.payload.id));
  yield put(mapActions.setFocusedEpisodeId(action.payload.id));
}

export default function* watchEpisodeSagas() {
  yield all([
    takeEvery(sagaTypes.START_EPISODE, startEpisode),
    takeEvery(sagaTypes.EXIT, exit),
    // takeEvery(sagaTypes.UNMOUNT_EPISODE_SCREEN, unmount),
    takeEvery(sagaTypes.ASK_QUESTION, askQuestion),
    takeEvery(sagaTypes.SET_EPISODE_DATA, setEpisodeData)
  ]);
}
