import { put, select, call, take } from 'redux-saga/effects';
import { actions as uiActions } from '../../redux/ui';
import { actions as studyActions } from '../../redux/study';
import selectors from '../../rootSelectors';
import { actions as sagaActions, types as sagaTypes } from '../actions';
import { checkDialogData, fetchDialogData } from './dialog';

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
  yield put(uiActions.set('nextButton', true));
}

export function* initStudyData() {
  yield put(studyActions.setDialogMode('explore'));
  const currentDialog = yield select(selectors.getCurrentDialog);
  yield put(studyActions.setCurrentStatementId(currentDialog.statements[0]));
  const currentStatement = yield select(selectors.getCurrentStatement);
  yield put(studyActions.setCurrentSentenceId(currentStatement.sentences[0]));
  yield put(studyActions.setChosenAvatarId(null));
}

export function* run() {
  yield put(sagaActions.playSentence());
  yield take(sagaTypes.NEXT_SCREEN);
}

// export function* clean() {}
