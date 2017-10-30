import { put, select, call, take } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as videoActions } from '../../redux/video';
import { fetchEntities } from '../entities';
import { actions as uiActions } from '../../redux/ui';
import { types as sagaTypes } from '../actions';

export function* isDataLoaded(id) {
  yield put(studyActions.setCurrentGrammarId(id));
  const currentElement = yield select(selectors.getCurrentGrammar);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, ['/episode/' + episodeId + '/grammars']);
  // TODO: handle fetch error
}

export function* checkData() {
  const currentElement = yield select(selectors.getCurrentGrammar);
  return currentElement.videoUrl ? true : false;
}

export function* initStudyData() {}

export function* initUi() {}

export function* run() {
  yield put(videoActions.autoPlayOn());
  yield take(sagaTypes.VIDEO_ENDED);
  yield put(uiActions.set('nextButton', true));
  return yield take(sagaTypes.NEXT);
}

// export function* clean() {}
