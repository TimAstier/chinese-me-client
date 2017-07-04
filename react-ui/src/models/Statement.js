import Immutable from 'immutable';

const Statement = Immutable.Record({
  id: null,
  order: null,
  sentences: []
});

export default Statement;
