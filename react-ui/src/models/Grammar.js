import Immutable from 'immutable';

const GrammarRecord = Immutable.Record({
  id: null,
  order: null,
  title: '',
  videoUrl: '',
  completed: false
});

class Grammar extends GrammarRecord {}

export default Grammar;
