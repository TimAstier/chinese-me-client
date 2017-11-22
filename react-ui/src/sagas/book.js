import { takeLatest, call, put } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { fetchEntities } from './entities';
import { actions as bookActions } from  '../redux/book';
import { actions as studyActions } from '../redux/study';
import { actions as mapActions } from '../redux/map';

function* fetchData(action) {
  const { seasonNumber, episodeNumber } = action.payload;
  yield call(
    fetchEntities,
    [
      `/season/${seasonNumber}/episode/${episodeNumber}`,
      function* (response) { // eslint-disable-line func-names
        yield put(studyActions.setCurrentEpisodeId(response.data.data.id));
        yield put(studyActions.setCurrentSeasonId(response.data.data.attributes.seasonId));
        yield put(mapActions.setFocusedEpisodeId(response.data.data.id)); // Triger fetchMapData
      }
    ]);
}

function* initBook(action) {
  yield put(bookActions.setInitialized(false));
  // TODO: Check data
  yield call(fetchData, action);
  yield put(bookActions.setInitialized(true));
}

export default function* watchBookSagas() {
  yield takeLatest(sagaTypes.INIT_BOOK, initBook);
}
