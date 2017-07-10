/* eslint-disable no-constant-condition */
import { takeEvery, put, select, call, race, take, all } from 'redux-saga/effects';
import { types as studyTypes} from '../redux/study';
import { types as sagaTypes } from './actions';
import { push } from 'react-router-redux';
import { actions as studyActions } from '../redux/study';
import { actions as entitiesActions } from '../redux/entities';
import selectors from '../rootSelectors';
import { fetchEntities } from './entities';
import { init } from '../rootSaga';

// Init sagas

function* initDialog() {
  const currentEpisode = yield select(selectors.getCurrentEpisode);
  yield put(studyActions.setCurrentDialogId(currentEpisode.dialogs[0]));
  const currentDialog = yield select(selectors.getCurrentDialog);
  yield put(studyActions.setCurrentStatementId(currentDialog.statements[0]));
  const currentStatement = yield select(selectors.getCurrentStatement);
  yield put(studyActions.setCurrentSentenceId(currentStatement.sentences[0]));
}

function* playEpisode(action) {
  try {
    // playCharacters
    // playGrammars
    yield call(playDialogs, action.payload.id);
    // playReview
    // playFinalTest
  } finally {
    yield call(exitEpisode);
  }
}

function* playDialogs(episodeId) {
  // Fetch dialogs data
  yield call(fetchEntities, '/episode/' + episodeId + '/dialogs');
  // TODO: handle fetch error
  yield call(playDialog); // TODO: for i = 0 to dialogs.length
}

function* playDialog() {
  yield call(initDialog);
  // Push route on router to mount studyDialog container
  yield put(push('/dialog'));
  yield race({
    end: take(sagaTypes.END_DIALOG),
    skip: take(sagaTypes.SKIP)
  });
  // TODO: Listen, Explore, Role play
}

function* exitEpisode() {
  yield put(entitiesActions.clear());
  yield call(init);
}

export default function* watchEpisodeSagas() {
  yield all([
    takeEvery(studyTypes.START_EPISODE, playEpisode),
    takeEvery(sagaTypes.EXIT, exitEpisode)
  ]);
}
