import { take, call } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { fetchEntities } from './entities';

// This is called only one time, when Study containers mounts
export default function* initApp() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(sagaTypes.INIT_APP);
    yield call(fetchEntities, ['/seasons']);
    yield call(fetchEntities, ['/episodes']);
  }
}
