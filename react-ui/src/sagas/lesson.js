import { takeLatest, call, put } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { fetchEntities } from './entities';
import { actions as lessonActions } from  '../redux/lesson';
import { actions as studyActions } from '../redux/study';

function* fetchLessonData(action) {
  const { seasonNumber, lessonNumber } = action.payload;
  yield call(
    fetchEntities,
    [
      `/season/${seasonNumber}/lesson/${lessonNumber}`,
      function* (response) { // eslint-disable-line func-names
        yield put(lessonActions.setCurrentLessonId(response.data.data.id));
        yield put(studyActions.setCurrentEpisodeId(response.data.data.id));
      }
    ]);
  // TODO: handle fetch error
}

function* initLesson(action) {
  yield put(lessonActions.setInitialized(false));
  // TODO: Check data
  yield put(studyActions.setCurrentSeasonId(action.payload.seasonNumber));
  yield put(lessonActions.setCurrentLessonNumber(action.payload.lessonNumber));
  yield call(fetchLessonData, action);
  yield put(lessonActions.setInitialized(true));
}

export default function* watchLessonSagas() {
  yield takeLatest(sagaTypes.INIT_LESSON, initLesson);
}
