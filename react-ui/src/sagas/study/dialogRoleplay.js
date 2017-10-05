import { put, select, call, take } from 'redux-saga/effects';
import { actions as fromUi } from '../../redux/ui';
import { actions as fromStudy, types as studyTypes } from '../../redux/study';
import selectors from '../../rootSelectors';
import { types as sagaTypes } from '../actions';
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
  yield put(fromStudy.setDialogMode('choserole'));
  const currentDialog = yield select(selectors.getCurrentDialog);
  yield put(fromStudy.setCurrentStatementId(currentDialog.statements[0]));
  const currentStatement = yield select(selectors.getCurrentStatement);
  yield put(fromStudy.setCurrentSentenceId(currentStatement.sentences[0]));
  yield put(fromStudy.setPaused(false));
}

export function* run() {
  const avatars = yield select(selectors.getCurrentAvatars);
  // No need to chose an avatar if there is only one personality in the dialog
  if (avatars.length === 1) {
    yield put(fromStudy.setChosenAvatarId(avatars[0].id));
  } else {
    yield take(studyTypes.SET_CHOSEN_AVATAR_ID);
  }
  yield take(sagaTypes.START_ROLEPLAY);
  yield put(fromStudy.setDialogMode('roleplay'));
  yield put(fromUi.set('pauseButton', true));
  yield call(dialogListenRun, 'roleplay');
}
