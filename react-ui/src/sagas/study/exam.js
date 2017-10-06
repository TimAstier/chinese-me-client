import { put, select, call, take, race } from 'redux-saga/effects';
import { actions as fromUi } from '../../redux/ui';
import selectors from '../../rootSelectors';
import { fetchEntities } from '../entities';
import { actions as examActions } from '../../redux/exam';
import { types as sagaTypes } from '../actions';
import { actions as studyActions } from '../../redux/study';
import getStudyFunctions from '../../helpers/getStudyFunctions';

export function* isDataLoaded() {
  // id is not defined since there is no elementId
  const currentExercise = yield select(selectors.getExamCurrentExercise);
  return currentExercise ? true : false;
}

export function* fetchData(episodeId) {
  // Fetch exercise entities, then store exercises array in Exam state slice
  yield call(fetchEntities, [
    '/episode/' + episodeId + '/exam',
    function* cb(response) {
      yield put(
        examActions.setExercises(response.data.data.attributes.exercises)
      );
    }
  ]);
  // TODO: handle fetch error
}

export function checkData() {
  return true;
}

export function* initUi() {
  yield put(fromUi.set('skipButton', false));
  yield put(fromUi.set('nextButton', false));
}

export function* initStudyData() {}

export function* run() {
  // TODO: for every exercise: (FIRST, TRY WITH ONE)
  // const episodeId = yield select(selectors.getCurrentEpisodeId);
  const currentExercise = yield select(selectors.getExamCurrentExercise);
  // const url = `/study/${episodeId}/${currentExercise.get('type')}/${currentExercise.get('id')}`;
  const funcs = getStudyFunctions(currentExercise.get('type') + '/')
  // console.log(url)
  console.log(funcs)
  // Set currentXXXId in study reducer
  yield put(studyActions.setCurrentMultipleChoiceId(currentExercise.get('id')));
  // Initialize study data (using URL)
  yield call(funcs.initStudyData); // Init studyData
  // set ExamInitialized to true
  yield put(examActions.setInitialized(true));
  // run the run saga
  yield race({
    runScreen: call(funcs.run),
    next: take(sagaTypes.NEXT),
    skip: take(sagaTypes.SKIP),
    exit: take(sagaTypes.EXIT)
  });
  // once done, switch ExamInitialized back to false
  yield take(sagaTypes.EXAM_COMPLETED);
}
