import { combineReducers } from 'redux-immutable';

import auth from './redux/auth';
import char from './redux/char';
import dialog from './redux/dialog';
import flashMessages from './redux/flashMessages';
import grammar from './redux/grammar';
import lesson from './redux/lesson';
import routing from './redux/routing';

export default combineReducers({
  auth,
  char,
  dialog,
  flashMessages,
  grammar,
  lesson,
  routing
});
