import { all, select, call, takeEvery, put } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import Api from '../utils/api';
import selectors from '../rootSelectors';
import { actions as entityActions } from '../redux/entities';

function* reviewCompleted() {
  try {
    const episodeId = yield select(selectors.getCurrentEpisodeId);
    const response = yield call(Api.post, '/review/' + episodeId);
    if (response.data) {
      yield put(entityActions.update('episodes', episodeId, 'review', true));
    } else {
      console.log('Review not updated to true in DB.');
    }
  } catch (err) {
    console.log('Review: failed save', err);
  }
}

export default function* watchReviewSagas() {
  yield all([
    takeEvery(sagaTypes.REVIEW_COMPLETED, reviewCompleted)
  ]);
}
