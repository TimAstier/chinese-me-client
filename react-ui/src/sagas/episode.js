/* eslint-disable no-constant-condition */
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { actions as entitiesActions } from '../redux/entities';
import { actions as uiActions } from '../redux/ui';
import { fetchEpisodes } from '../rootSaga';
import { push } from 'react-router-redux';

function* exitEpisode() {
  yield put(entitiesActions.clear());
  yield call(fetchEpisodes);
  yield put(push('/select'));
}

function* askQuestion() {
  yield put(uiActions.openFeedbackModal());
}

export default function* watchEpisodeSagas() {
  yield all([
    takeEvery(sagaTypes.EXIT, exitEpisode),
    takeEvery(sagaTypes.ASK_QUESTION, askQuestion)
  ]);
}
