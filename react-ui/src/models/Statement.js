import Immutable from 'immutable';

const Statement = Immutable.Record({
  id: null,
  order: null,
  sentence: []
});

export default Statement;
