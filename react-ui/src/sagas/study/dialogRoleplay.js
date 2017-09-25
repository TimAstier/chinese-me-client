import { put, select, call } from 'redux-saga/effects';
import { actions as fromUi } from '../../redux/ui';
import { actions as fromStudy } from '../../redux/study';
import selectors from '../../rootSelectors';
import { run as dialogListenRun } from './dialogListen';
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
  yield put(fromUi.set('skipButton', true));
  yield put(fromUi.set('nextButton', false));
}

export function* initStudyData() {
  yield put(fromStudy.setDialogMode('roleplay'));
  const currentDialog = yield select(selectors.getCurrentDialog);
  yield put(fromStudy.setCurrentStatementId(currentDialog.statements[0]));
  const currentStatement = yield select(selectors.getCurrentStatement);
  yield put(fromStudy.setCurrentSentenceId(currentStatement.sentences[0]));
  yield put(fromStudy.setChosenAvatarId(4)); // TODO: select avatar
}

export function* run() {
  yield call(dialogListenRun, 'roleplay');
}
