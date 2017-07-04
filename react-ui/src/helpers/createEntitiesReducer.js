import createNamedEntityReducer from '../redux/entities';
import { combineReducers } from 'redux-immutable';

const createEntitiesReducer = models => {
  const object = {};
  for (const k in models) {
    if (models.hasOwnProperty(k)) {
      const entityName = k.toLowerCase() + 's';
      const reducer = createNamedEntityReducer(entityName, models[k]);
      object[entityName] = reducer;
    }
  }
  return combineReducers(object);
};

export default createEntitiesReducer;
