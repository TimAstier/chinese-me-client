import { put, select, call, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actions as fromUi } from '../../redux/ui';
import { actions as fromStudy } from '../../redux/study';
import selectors from '../../rootSelectors';
import { types as sagaTypes } from '../actions';
import { next, playSentence, checkDialogData, fetchDialogData } from './dialog';

export function* checkData(id) {
  yield call(checkDialogData, id);
}

export function* fetchData(episodeId) {
  yield call(fetchDialogData, episodeId);
}

export function* initUi() {
  yield put(fromUi.set('skipButton', true));
  yield put(fromUi.set('nextButton', false));
  yield put(fromUi.set('playAudioButton', false));
}

export function* initStudyData() {
  const currentDialog = yield select(selectors.getCurrentDialog);
  yield put(fromStudy.setCurrentStatementId(currentDialog.statements[0]));
  const currentStatement = yield select(selectors.getCurrentStatement);
  yield put(fromStudy.setCurrentSentenceId(currentStatement.sentences[0]));
  // yield put(fromStudy.setChosenAvatarId(null));
}

export function* run(mode = 'listen') {
  yield put(fromStudy.setDialogMode(mode));
  yield call(playSentence, mode);
  const sentencesCount =
    yield select(selectors.getSentencesCountInCurrentDialog);
  for (let i = 0; i < sentencesCount - 1; i++) {
    yield delay(500); // Create spaces between audios
    yield call(next, mode);
  }
  yield put(fromUi.set('nextButton', true));
  yield take(sagaTypes.NEXT);
}
