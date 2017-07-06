import { combineReducers } from 'redux-immutable';
import * as duckReducers from './redux';
import * as fromModels from './models';
import createEntitiesReducer from './utils/createEntitiesReducer';

export default combineReducers({
  ...duckReducers,
  entities: createEntitiesReducer({ ...fromModels })
});
