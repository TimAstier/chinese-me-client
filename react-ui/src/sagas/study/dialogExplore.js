import { put, select, call } from 'redux-saga/effects';
import { actions as fromUi } from '../../redux/ui';
import { actions as fromStudy } from '../../redux/study';
import selectors from '../../rootSelectors';
import { actions as sagaActions } from '../actions';
import { checkDialogData, fetchDialogData } from './dialog';

export function* checkData(id) {
  yield call(checkDialogData, id);
}

export function* fetchData(episodeId) {
  yield call(fetchDialogData, episodeId);
}

export function* initUi() {
  yield put(fromUi.set('skipButton', true));
  yield put(fromUi.set('nextButton', true));
}

export function* initStudyData() {
  yield put(fromStudy.setDialogMode('explore'));
  const currentDialog = yield select(selectors.getCurrentDialog);
  yield put(fromStudy.setCurrentStatementId(currentDialog.statements[0]));
  const currentStatement = yield select(selectors.getCurrentStatement);
  yield put(fromStudy.setCurrentSentenceId(currentStatement.sentences[0]));
  // yield put(fromStudy.setChosenAvatarId(null));
}

export function* run() {
  yield put(sagaActions.playSentence());
}