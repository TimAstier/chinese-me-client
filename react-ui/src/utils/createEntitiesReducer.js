import createNamedEntityReducer from '../redux/entities';
import { combineReducers } from 'redux-immutable';

function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

const createEntitiesReducer = models => {
  const modelsArray = [];
  for (const k in models) {
    modelsArray.push({ model: models[k], name: k });
  }
  const object = {};
  modelsArray.forEach(m => {
    const entityName = lowerCaseFirstLetter(m.name) + 's';
    const reducer = createNamedEntityReducer(entityName, m.model);
    object[entityName] = reducer;
  });
  return combineReducers(object);
};

export default createEntitiesReducer;
