import isEmpty from 'lodash/isEmpty';

const setEntities = (state, newEntities, Model) => {
  // Assumes the JSON Api is returning entities and relations
  // in the correct order
  const records = {};
  for (const newEntity in newEntities) {
    if (newEntities.hasOwnProperty(newEntity)) {
      const entity = newEntities[newEntity];
      const attributes = entity.attributes;
      const object = {};
      // Find all relationship ids
      if (entity.hasOwnProperty('relationships')) {
        const relationships = entity.relationships;
        for (const r in relationships) {
          if (relationships.hasOwnProperty(r)) {
            if (relationships[r].data && !isEmpty(relationships[r].data)) {
              if (relationships[r].data.constructor === Array) {
                // hasMany case
                object[r] = relationships[r].data.map(e => Number(e.id));
              } else {
                // hasOne case
                object[r] = relationships[r].data.id;
              }
            }
          }
        }
      }
      // Un-nest translations
      if (attributes.hasOwnProperty('translations')) {
        // TODO: Server should send the translation that corresponds to user settings
        const translations = attributes.translations[0];
        for (const translatedField in translations) {
          if (translations.hasOwnProperty(translatedField)) {
            object[translatedField] = translations[translatedField];
          }
        }
        delete attributes.translations;
      }
      records[attributes.id] = new Model({ ...attributes, ...object });
    }
  }
  return state.merge(records);
};

export default setEntities;
