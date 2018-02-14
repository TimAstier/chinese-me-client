import { put, select, call, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actions as uiActions } from '../../redux/ui';
import { actions as studyActions } from '../../redux/study';
import selectors from '../../rootSelectors';
import { types as sagaTypes } from '../actions';
import { next, playSentence, checkDialogData, fetchDialogData } from './dialog';

export function* isDataLoaded(id) {
  yield call(checkDialogData, id);
}

export function* fetchData(episodeId) {
  yield call(fetchDialogData, episodeId);
}

export function checkData() {
  return true;
}

export function* initUi() {
  yield put(uiActions.set('pauseButton', true));
}

export function* initStudyData() {
  yield put(studyActions.setDialogMode('watch'));
  const currentDialog = yield select(selectors.getCurrentDialog);
  yield put(studyActions.setCurrentStatementId(currentDialog.statements[0]));
  const currentStatement = yield select(selectors.getCurrentStatement);
  yield put(studyActions.setCurrentSentenceId(currentStatement.sentences[0]));
  yield put(studyActions.setChosenAvatarId(null));
  yield put(studyActions.setPaused(false));
}

export function* run() {
  yield call(playSentence);
  const sentencesCount =
    yield select(selectors.getSentencesCountInCurrentDialog);
  for (let i = 0; i < sentencesCount; i++) {
    const paused = yield select(selectors.study.getPaused);
    if (paused) {
      yield take(sagaTypes.PAUSE);
      yield call(playSentence);
      i--;
    } else {
      if (i < sentencesCount - 1) {
        yield delay(500); // Create spaces between audios
        yield call(next);
      }
    }
  }
  yield put(uiActions.set('pauseButton', false));
}

// export function* nextScreen() {}

// export function* clean() {}
