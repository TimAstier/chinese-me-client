import { all, takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { types as mapTypes, actions as mapActions } from '../redux/map';
import { types as studyTypes, actions as studyActions } from '../redux/study';
import { types as sagaTypes } from './actions';
import { actions as uiActions } from '../redux/ui';
import Api from '../utils/api';
import { push } from 'react-router-redux';

function* fetchMapData(action) {
  // reset mapData
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

export default function* watchMapSagas() {
  yield all([
    takeLatest(mapTypes.SET_FOCUSED_EPISODE_ID, fetchMapData),
    takeLatest(studyTypes.SET_CURRENT_EPISODE_ID, fetchMapData),
    takeEvery(sagaTypes.MAP_LINK_CLICK, navigateToStudyScreen)
  ]);
}
