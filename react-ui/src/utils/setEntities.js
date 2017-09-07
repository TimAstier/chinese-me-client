const setEntities = (state, newEntities, Model) => {
  // Assumes the JSON Api is returning entities and relations
  // in the correct order
  const records = newEntities.map(entity => {
    const attributes = entity.get('attributes').toJS();
    const object = {};
    // Find all relationship Ids
    if (entity.get('relationships')) {
      const relationships = entity.get('relationships').toJS();
      for (const entity in relationships) {
        if (relationships.hasOwnProperty(entity)) {
          object[entity] = relationships[entity].data.map(e => Number(e.id));
        }
      }
    }
    return new Model({
      ...attributes,
      ...object // relationships
    });
  });
  return state.merge(records);
};

export default setEntities;
