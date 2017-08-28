import { put, select, call } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as videoActions } from '../../redux/video';
import { fetchEntities } from '../entities';

export function* checkData(id) {
  yield put(studyActions.setCurrentGrammarId(id));
  const currentElement = yield select(selectors.getCurrentGrammar);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, '/episode/' + episodeId + '/grammars');
  // TODO: handle fetch error
}

export function* initStudyData() {
  yield put(videoActions.autoPlayOn());
}

export function* initUi() {}

// export function* run() {}
