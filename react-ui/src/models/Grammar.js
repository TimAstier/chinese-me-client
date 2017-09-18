import Immutable from 'immutable';

const GrammarRecord = Immutable.Record({
  id: null,
  order: null,
  completed: false,
  title: '',
  videoUrl: ''
});

class Grammar extends GrammarRecord {}

export default Grammar;
