import { put, select, call } from 'redux-saga/effects';
import { actions as fromUi } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { actions as studyActions } from '../../redux/study';
import { actions as videoActions } from '../../redux/video';
import { fetchEntities } from '../entities';

export function* checkData(id) {
  yield put(studyActions.setCurrentCharacterId(id));
  const currentElement = yield select(selectors.getCurrentCharacter);
  return (currentElement === undefined) ? false : true;
}

export function* fetchData(episodeId) {
  return yield call(fetchEntities, '/episode/' + episodeId + '/characters');
  // TODO: handle fetch error
}

export function* initStudyData() {
  yield put(videoActions.autoPlayOn());
}

export function* initUi() {
  yield put(fromUi.set('skipButton', true));
  // TODO: move this in global EpisodeScreen init ui
  yield put(fromUi.closeModal());
}

export function* run() {}
