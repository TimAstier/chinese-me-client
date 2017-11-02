import { put, select, call, take } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as videoActions } from '../../redux/video';
import { actions as uiActions } from '../../redux/ui';
import { fetchEntities } from '../entities';
import { shouldAskQuestion, askQuestion } from '../questionModal';
import { types as sagaTypes } from '../actions';

export function* isDataLoaded(id) {
  yield put(studyActions.setCurrentCharacterId(id));
  const currentElement = yield select(selectors.getCurrentCharacter);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, ['/episode/' + episodeId + '/characters']);
  // TODO: handle fetch error
}

export function* checkData() {
  const currentElement = yield select(selectors.getCurrentCharacter);
  return currentElement.etymologyUrl ? true : false;
}

export function* initStudyData() {}

export function* initUi() {}

export function* run() {
  yield put(videoActions.autoPlayOn());
  yield take(sagaTypes.VIDEO_ENDED);
  const setting = 'ETYMOLOGY_VIDEO';
  const ask = yield call(shouldAskQuestion, setting);
  if (ask) {
    return yield call(askQuestion, setting);
  }
  yield put(uiActions.set('nextButton', true));
  return yield take(sagaTypes.NEXT);
}

// export function* clean() {}
