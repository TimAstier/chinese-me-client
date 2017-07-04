import { combineReducers } from 'redux-immutable';
import * as duckReducers from './redux';
import * as fromEntities from './redux/entities';
import * as fromModels from './models';
import createEntitiesReducer from './helpers/createEntitiesReducer';

export default combineReducers({
  ...duckReducers,
  entities: createEntitiesReducer({ ...fromModels })
});

// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

export const getEntities = (state, reducerName) => {
  return fromEntities.selectors.getEntities(state.get('entities'), reducerName);
};

// export const getIsFetching = state => {
//   return fromEpisodes.selectors.getIsFetching(state.get('isFetching'));
// };
