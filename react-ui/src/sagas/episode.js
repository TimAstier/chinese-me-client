/* eslint-disable no-constant-condition */
import { takeEvery, put, call, all, select } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { types as studyTypes } from '../redux/study';
import { actions as entitiesActions } from '../redux/entities';
import { actions as uiActions } from '../redux/ui';
import { push } from 'react-router-redux';
import selectors from '../rootSelectors';
import getParamsFromUrl from '../utils/getParamsFromUrl';

function* exitEpisode() {
  yield put(push('/select'));
  yield put(entitiesActions.clear());
}

function* askQuestion() {
  yield put(uiActions.openFeedbackModal());
}

function* skip() {
  yield call(next); // TODO: differentiate skip and next in analytics
}

function* next() {
  const urlParams = getParamsFromUrl(yield select(selectors.getCurrentUrl));
  const { episodeId, elementType, elementId, mode } = urlParams;
  const screenType = elementType + '/' + mode; // Define screenType
  const nextUrl = yield call(findNextUrl, { screenType, episodeId, elementId }); // Find next URL
  return yield put(push(nextUrl)); // Push url
}

function* findNextUrl(params) {
  const { screenType, episodeId, elementId } = params;
  switch (screenType) {
    case 'character/pinyin':
      const nextCharacterId = yield select(selectors.getNextCharacterId);
      if (nextCharacterId) {
        return '/study/' + episodeId + '/character/' + nextCharacterId + '/pinyin';
      }
      const currentEpisode = yield select(selectors.getCurrentEpisode);
      const dialogId = currentEpisode.dialogs[0];
      return '/study/' + episodeId + '/dialog/' + dialogId + '/listen';
    case 'dialog/listen':
      return '/study/' + episodeId + '/dialog/' + elementId + '/explore';
    case 'dialog/explore':
      return '/study/' + episodeId + '/dialog/' + elementId + '/roleplay';
    default:
      return '/error';
  }
}

function* startEpisode(action) {
  return yield put(push('/study/' + action.payload.id + '/title/1'));
}

export default function* watchEpisodeSagas() {
  yield all([
    takeEvery(studyTypes.START_EPISODE, startEpisode),
    takeEvery(sagaTypes.EXIT, exitEpisode),
    takeEvery(sagaTypes.ASK_QUESTION, askQuestion),
    takeEvery(sagaTypes.SKIP, skip),
    takeEvery(sagaTypes.NEXT, next)
  ]);
}
