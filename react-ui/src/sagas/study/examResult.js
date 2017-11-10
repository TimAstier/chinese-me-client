import { put, select, take, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { actions as uiActions } from '../../redux/ui';
import { actions as examActions } from '../../redux/exam';
import selectors from '../../rootSelectors';
import Api from '../../utils/api';

export function isDataLoaded() {
  return true;
}

// export function* fetchData() {}

export function* checkData() {
  const completed = yield select(selectors.exam.getCompleted);
  return completed;
}

export function* initUi() {
  yield put(uiActions.set('skipButton', false));
  yield put(uiActions.set('nextButton', true));
}

export function* initStudyData() {}

export function* run() {
  const score = yield select(selectors.exam.getScore);
  yield delay(500);
  yield put(score >= 7 ? sagaActions.playLevelWinSound() : sagaActions.playLevelFailSound());
  // Tracking and save
  const exercises = yield select(selectors.exam.getExercises);
  const results = yield select(selectors.exam.getResults);
  const timeLeft = yield select(selectors.timer.getTime);
  const currentEpisode = yield select(selectors.getCurrentEpisode);
  const currentSeason = yield select(selectors.getCurrentSeason);
  yield put(sagaActions.examCompleted({
    seasonId: currentSeason.get('id'),
    seasonNumber: currentSeason.get('number'),
    episodeId: currentEpisode.get('id'),
    episodeNumber: currentEpisode.get('number'),
    score,
    timeLeft,
    exercises,
    results
  }));
  // End Tracking and save
  // Save score in DB
  yield call(Api.post, '/episode/exam/completed',
    {
      episodeId: currentEpisode.get('id'),
      score
    }
  );
  yield put(sagaActions.reloadApp());
  // const entities = normalize(response.data);
  // yield put(actions.received(entities));
  yield take(sagaTypes.NEXT);
}

export function* clean(isCancelled) {
  if (isCancelled) {
    yield put(examActions.clean());
  }
}
