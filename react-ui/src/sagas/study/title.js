import { put, select } from 'redux-saga/effects';
import { actions as fromUi } from '../../redux/ui';
import { actions as fromStudy } from '../../redux/study';
import selectors from '../../rootSelectors';

export function* initUi() {
  yield put(fromUi.set('skipButton', false));
  yield put(fromUi.set('nextButton', true));
}

export function* initStudyData() {
  const url = yield select(selectors.getCurrentUrl);
  const episodeId = url.split('/')[2];
  const partNumber = url.split('/')[4];
  yield put(fromStudy.setCurrentEpisodeId(episodeId));
  yield put(fromStudy.setPartNumber(Number(partNumber)));
}

export function* run() {

}
