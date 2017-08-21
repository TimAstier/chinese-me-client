import { take, call } from 'redux-saga/effects';
import { types as sagaTypes } from './actions';
import { fetchEntities } from './entities';

// This is called only one time, when App containers mounts
export default function* initApp() {
  yield take(sagaTypes.INIT_APP);
  yield call(fetchEntities, '/seasons');
  yield call(fetchEntities, '/episodes');
}
