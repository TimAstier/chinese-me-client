/* eslint-disable no-constant-condition */
import { takeEvery, put, call, all, race, take } from 'redux-saga/effects';
import { types as studyTypes} from '../redux/study';
import { types as sagaTypes } from './actions';
import { actions as entitiesActions } from '../redux/entities';
import { fetchEpisodes } from '../rootSaga';
import { playCharacters } from './studyCharacters';
import { playDialogs } from './studyDialog';
import { push } from 'react-router-redux';

function* playEpisode(action) {
  try {
    // Characters
    yield race({
      playCharacters: call(playCharacters, action.payload.id),
      exit: take(sagaTypes.EXIT)
    });
    // Grammars
    // Dialogs
    yield race({
      playDialogs: call(playDialogs, action.payload.id),
      exit: take(sagaTypes.EXIT)
    });
    // Review
    // FinalTest
  } finally {
    yield call(exitEpisode);
  }
}

function* exitEpisode() {
  yield put(entitiesActions.clear());
  yield call(fetchEpisodes);
  yield put(push('/select'));
}

export default function* watchEpisodeSagas() {
  yield all([
    takeEvery(studyTypes.START_EPISODE, playEpisode),
    takeEvery(sagaTypes.EXIT, exitEpisode)
  ]);
}
