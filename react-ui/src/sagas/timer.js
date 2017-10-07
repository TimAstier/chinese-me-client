// Timer concept coming from Jack Hsu
// https://jaysoo.ca/2016/01/03/managing-processes-in-redux-using-sagas/

import { actionChannel, call, take, put, race, select } from 'redux-saga/effects';
import { actions, types } from '../redux/timer';
import selectors from '../rootSelectors';

// wait :: Number -> Promise
const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  })
);

const ONE_SECOND = 1000;

function* runTimer() {
  const channel = yield actionChannel(types.START);

  while (yield take(channel)) {
    while (true) { // eslint-disable-line 
      const time = yield select(selectors.getTimerTime);
      if (!time) {
        yield put(actions.outOfTime());
        break;
      }
      const winner = yield race({
        stopped: take(types.STOP),
        tick: call(wait, ONE_SECOND)
      });

      if (!winner.stopped) {
        yield put(actions.tick());
      } else {
        break;
      }
    }
  }
}

export default runTimer;
