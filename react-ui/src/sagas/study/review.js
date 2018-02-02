import { select, call } from 'redux-saga/effects';
import selectors from '../../rootSelectors';
// import { actions as studyActions } from '../../redux/study';
import { fetchEntities } from '../entities';

export function* isDataLoaded() {
  const bookInitialized = yield select(selectors.book.getInitialized);
  return bookInitialized;
}

export function* fetchData() {
  const episode = yield select(selectors.getCurrentEpisode);
  const season = yield select(selectors.getCurrentSeason);
  yield call(fetchEntities, [`/season/${season.number}/episode/${episode.number}`]);
}

export function checkData() {
  return true;
}

export function* initStudyData() {}

export function* initUi() {}

export function* run() {
}

// export function* nextScreen() {}

// export function* clean() {}
