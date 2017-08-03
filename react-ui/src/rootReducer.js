import { combineReducers } from 'redux-immutable';
import * as duckReducers from './redux';
import * as fromModels from './models';
import createEntitiesReducer from './utils/createEntitiesReducer';
import { reducer as formReducer } from 'redux-form/immutable';

export default combineReducers({
  ...duckReducers,
  entities: createEntitiesReducer({ ...fromModels }),
  form: formReducer
});
