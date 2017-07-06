import createNamedEntityReducer from '../redux/entities';
import { combineReducers } from 'redux-immutable';

const createEntitiesReducer = models => {
  const coreModels = [];
  const mapModels = [];
  for (const k in models) {
    if (models[k].name.endsWith('Map')) {
      mapModels.push(models[k]);
    } else {
      coreModels.push({ model: models[k], name: k });
    }
  }
  const object = {};
  coreModels.forEach((m, i) => {
    const entityName = m.name.toLowerCase() + 's';
    const reducer = createNamedEntityReducer(entityName, m.model, mapModels[i]);
    object[entityName] = reducer;
  });
  return combineReducers(object);
};

export default createEntitiesReducer;
