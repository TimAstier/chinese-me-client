import { takeLatest, call, put } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { fetchEntities } from './entities';
import { actions as lessonActions } from  '../redux/lesson';

function* fetchLessonData(id) {
  return yield call(fetchEntities, '/lesson/' + id);
  // TODO: handle fetch error
}

function* initLesson(action) {
  yield put(lessonActions.setInitialized(false));
  yield put(lessonActions.setCurrentLessonId(action.payload.id));
  yield call(fetchLessonData, action.payload.id);
  yield put(lessonActions.setInitialized(true));
}

export default function* watchLessonSagas() {
  yield takeLatest(sagaTypes.INIT_LESSON, initLesson);
}
