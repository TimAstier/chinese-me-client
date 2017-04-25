import { combineReducers } from 'redux-immutable';

import auth from './redux/auth';
import chars from './redux/chars';
import dialogs from './redux/dialogs';
import flashMessages from './redux/flashMessages';
import routing from './redux/routing';

export default combineReducers({
  auth,
  chars,
  dialogs,
  flashMessages,
  routing
});
