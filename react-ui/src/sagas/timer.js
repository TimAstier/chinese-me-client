// Timer concept coming from Jack Hsu
// https://jaysoo.ca/2016/01/03/managing-processes-in-redux-using-sagas/

import { actionChannel, call, take, put, race, select } from 'redux-saga/effects';
import { actions as timerActions, types as timerTypes } from '../redux/timer';
import selectors from '../rootSelectors';

// wait :: Number -> Promise
const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  })
);

const ONE_SECOND = 1000;

function* runTimer() {
  const channel = yield actionChannel(timerTypes.START);

  while (yield take(channel)) {
    while (true) { // eslint-disable-line 
      const time = yield select(selectors.getTimerTime);
      if (!time) {
        yield put(timerActions.outOfTime());
        break;
      }
      const winner = yield race({
        stopped: take(timerTypes.STOP),
        tick: call(wait, ONE_SECOND)
      });

      if (!winner.stopped) {
        yield put(timerActions.tick());
      } else {
        break;
      }
    }
  }
}

export default runTimer;
