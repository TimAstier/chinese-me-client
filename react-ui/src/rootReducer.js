import { combineReducers } from 'redux-immutable';
import routerReducer from './routerReducer';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';

export default combineReducers({
  flashMessages,
  auth,
  routing: routerReducer
});
