import { put, select, call } from 'redux-saga/effects';
import { actions as studyActions } from '../../redux/study';
import selectors from '../../rootSelectors';
import { checkDialogData, fetchDialogData } from './dialog';
import { playSentence } from './dialog';

export function* isDataLoaded(id) {
  yield call(checkDialogData, id);
}

export function* fetchData(episodeId) {
  yield call(fetchDialogData, episodeId);
}

export function checkData() {
  return true;
}

export function* initUi() {}

export function* initStudyData() {
  yield put(studyActions.setDialogMode('explore'));
  const currentDialog = yield select(selectors.getCurrentDialog);
  yield put(studyActions.setCurrentStatementId(currentDialog.statements[0]));
  const currentStatement = yield select(selectors.getCurrentStatement);
  yield put(studyActions.setCurrentSentenceId(currentStatement.sentences[0]));
  yield put(studyActions.setChosenAvatarId(null));
}

export function* run() {
  yield call(playSentence);
}

// export function* nextScreen() {}

// export function* clean() {}
