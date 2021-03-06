/* eslint-disable no-constant-condition */
import { takeEvery, put, all } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
// import { actions as entitiesActions } from '../redux/entities';
import { actions as uiActions } from '../redux/ui';
import { push } from 'react-router-redux';

function* exit(action) {
  // NOTE: url 'varies' depending on the context.
  // For example, when doing a practice belonging to a review, back redirects
  // to the /review screen. Otherwise it redirects to the book.
  // see the 'getBackUrl' selector
  const { url } = action.payload;
  return yield put(push(url));
}

function* askQuestion() {
  yield put(uiActions.openFeedbackModal());
}

function* startEpisode(action) {
  const { seasonNumber, episodeNumber } = action.payload;
  const url = `/course/season/${seasonNumber}/episode/${episodeNumber}`;
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
