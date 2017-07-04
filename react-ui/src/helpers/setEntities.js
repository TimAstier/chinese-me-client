const setEntities = (state, newEntities, Model) => {
  return state.merge(
    newEntities.map(entity => {
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
        id: entity.id,
        ...attributes,
        ...object // relationships
      });
    })
  );
};

export default setEntities;
