import Immutable from 'immutable';

const ExampleRecord = Immutable.Record({
  id: null,
  order: null,
  chinese: '',
  pinyin: '',
  english: '',
  literalEnglish: ''
});

class Example extends ExampleRecord {}

export default Example;
