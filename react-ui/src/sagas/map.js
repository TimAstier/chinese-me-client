import { all, takeLatest, call, put, takeEvery, select } from 'redux-saga/effects';
import { types as mapTypes, actions as mapActions } from '../redux/map';
import { types as studyTypes, actions as studyActions } from '../redux/study';
import { types as sagaTypes } from './actions';
import { types as uiTypes, actions as uiActions } from '../redux/ui';
import Api from '../utils/api';
import { push } from 'react-router-redux';
import selectors from '../rootSelectors';

function* fetchMapData(action) {
  try {
    const episodeId = action.payload.id;
    const response = yield call(Api.get, '/episodes/' + episodeId + '/map');
    yield put(mapActions.setData(response.data.data.attributes));
    yield put(mapActions.fetchSuccess());
  } catch (error) {
    yield put(yield put(mapActions.fetchFail(error)));
  }
}

function* navigateToStudyScreen(action) {
  yield put(studyActions.setInitialized(false)); // Hide screen content
  yield put(push(action.payload.link));
  yield put(uiActions.closeMapModal());
}

// This ensures that mapData is always sync with the currentEpisode
// (mapData is used to calculate completionPercentage in Progressbar)
function* syncWithCurrentEpisode() {
  const currentEpisodeId = yield select(selectors.getCurrentEpisodeId);
  const focusedEpisodeId = yield select(selectors.getFocusedEpisodeId);
  if (currentEpisodeId) {
    if (currentEpisodeId !== focusedEpisodeId) { // no need to sync if already synced
      yield put(mapActions.setFocusedEpisodeId(currentEpisodeId));
      // The above line indirecty triggers fetchMapData
    }
  }
}

export default function* watchMapSagas() {
  yield all([
    takeLatest(mapTypes.SET_FOCUSED_EPISODE_ID, fetchMapData),
    takeLatest(studyTypes.SET_CURRENT_EPISODE_ID, fetchMapData),
    takeEvery(sagaTypes.MAP_LINK_CLICK, navigateToStudyScreen),
    takeLatest(uiTypes.CLOSE_MAP_MODAL, syncWithCurrentEpisode)
  ]);
}
