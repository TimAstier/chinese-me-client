/* eslint-disable no-constant-condition */
import { takeEvery, put, all } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
// import { actions as entitiesActions } from '../redux/entities';
import { actions as uiActions } from '../redux/ui';
import { push } from 'react-router-redux';

function* exit(action) {
  const { seasonNumber, episodeNumber } = action.payload;
  const url = `/study/season/${seasonNumber}/episode/${episodeNumber}`;
  return yield put(push(url));
}

function* askQuestion() {
  yield put(uiActions.openFeedbackModal());
}

function* startEpisode(action) {
  const { seasonNumber, episodeNumber } = action.payload;
  const url = `/study/season/${seasonNumber}/episode/${episodeNumber}`;
  yield put(uiActions.setScrollPosition(0));
  return yield put(push(url));
}

export default function* watchEpisodeSagas() {
  yield all([
    takeEvery(sagaTypes.START_EPISODE, startEpisode),
    takeEvery(sagaTypes.EXIT, exit),
    takeEvery(sagaTypes.ASK_QUESTION, askQuestion)
  ]);
}
